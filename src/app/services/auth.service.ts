import { HttpClient } from '@angular/common/http'
import { DOCUMENT, inject, Injectable } from '@angular/core'
import { catchError, tap, throwError } from 'rxjs'
import { environment } from '../../environments/environment'
import TokenResponseInterface from '../interfaces/token.interface'
import User from '../interfaces/user.interface'
import { AuthStore } from '../store/auth.store'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private user = new BehaviorSubject<object | null>(null)
  #token: string | null = null
  readonly #document: Document = inject(DOCUMENT)
  readonly #localStorage: Storage | undefined
  readonly #authStore = inject(AuthStore)
  readonly #httpClient = inject(HttpClient)
  readonly #domain: string = environment.domain
  readonly #api: string = environment.api

  constructor() {
    this.#localStorage = this.#document.defaultView?.localStorage
  }

  public initializeAuth() {
    const currentToken: string | undefined | null =
      this.#localStorage?.getItem('token')
    const user_name: string | undefined | null =
      this.#localStorage?.getItem('user_name')
    if (!currentToken || !user_name) {
      this.#token = null
    } else {
      const payload = JSON.parse(atob(currentToken.split('.')[1]))
      const expirationDateMs: number = payload.exp * 1000
      const newData = {
        isAuthenticated: Date.now() < expirationDateMs,
        user_name: user_name,
      }
      this.#authStore.set(newData)
    }
  }

  public getIsAuthenticated(): boolean {
    if (!this.#token) {
      return false
    }
    const payload = JSON.parse(atob(this.#token.split('.')[1]))
    const expirationDateMs: number = payload.exp * 1000
    return Date.now() < expirationDateMs
  }

  // private logout(): void {
  //   if (typeof this.#token == 'string') {
  //     this.removeItem(this.#token)
  //   }
  // }

  public login(user: User) {
    return this.#httpClient
      .post(this.#domain + this.#api + 'jwt-auth/v1/token', user)
      .pipe(
        tap((res: TokenResponseInterface) => {
          if (
            res.token &&
            res.token.length > 0 &&
            res.user_nicename &&
            res.user_nicename.length > 0
          ) {
            localStorage.setItem('token', res.token)
            localStorage.setItem('user_name', res.user_nicename)
          }
        }),
        catchError(error => {
          console.log('>>>>>>>>>> error: ', error)
          return throwError(() => error)
        }),
      )
  }
}
