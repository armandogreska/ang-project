import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import AuthInterface from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  // TODO: Init with null to filter out the first value in a guard!
  readonly #empty: AuthInterface = {
    token: '',
    userName: '',
    isAuthenticated: false,
  }

  readonly #authStore = new BehaviorSubject<AuthInterface>({
    ...this.#empty,
  })

  readonly authStore$: Observable<AuthInterface> =
    this.#authStore.asObservable()

  public set(e: AuthInterface) {
    if (!!e.token.length && !!e.userName.length) {
      this.#authStore.next({ ...this.#authStore.getValue(), ...e })
    }
  }

  public reset() {
    this.#authStore.next({
      ...this.#empty,
    })
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
  }
}
