import { HttpClient } from '@angular/common/http'
import { DestroyRef, DOCUMENT, inject, Injectable } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { catchError, tap, throwError } from 'rxjs'
import { environment } from '../../environments/environment'
import AuthInterface from '../interfaces/auth.interface'
import TokenResponseInterface from '../interfaces/token.interface'
import User from '../interfaces/user.interface'
import { AuthStore } from '../store/auth.store'
import { LoadingStore } from '../store/loading.store'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private user = new BehaviorSubject<object | null>(null)
  readonly #destroyRef = inject(DestroyRef)
  readonly #document: Document = inject(DOCUMENT)
  readonly #localStorage: Storage | undefined =
    this.#document.defaultView?.localStorage
  readonly #authStore = inject(AuthStore)
  readonly #httpClient = inject(HttpClient)
  readonly #domain: string = environment.domain
  readonly #api_auth: string = environment.api_auth
  readonly #loadingStore = inject(LoadingStore)

  constructor() {
    this.#authStore.authStore$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(e => {
        if (e.token) {
          localStorage.setItem('token', e.token)
          localStorage.setItem('userName', e.userName)
        }
      })
  }

  public initializeAuthStore() {
    const currentToken: string | undefined | null =
      this.#localStorage?.getItem('token')
    const userName: string | undefined | null =
      this.#localStorage?.getItem('userName')
    if (!!currentToken && !!userName) {
      const payload = JSON.parse(atob(currentToken.split('.')[1]))
      const expirationDateMs: number = payload.exp * 1000
      const isTokenValid: boolean = Date.now() < expirationDateMs
      const newData: AuthInterface = {
        token: isTokenValid ? currentToken : '',
        isAuthenticated: isTokenValid,
        userName: userName,
      }
      this.#authStore.set(newData)
    }
  }

  public login(user: User) {
    this.#loadingStore.set(true)
    return this.#httpClient
      .post(this.#domain + this.#api_auth + '/token', user)
      .pipe(
        tap((res: TokenResponseInterface) => {
          const newData: AuthInterface = {
            token: res.token || '',
            userName: res.user_nicename || '',
            isAuthenticated: true,
          }
          this.#authStore.set(newData)
        }),
        catchError(error => {
          // TODO: case user/password incorrect
          console.log('>>>>>>>>>> error: ', error)
          return throwError(() => error)
        }),
      )
  }
}
