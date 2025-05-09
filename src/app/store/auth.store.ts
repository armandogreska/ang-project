import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import AuthInterface from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  // TODO: Init with null to filter out the first value in a guard!
  readonly #authStore = new BehaviorSubject<AuthInterface>({
    token: '',
    userName: '',
    isAuthenticated: false,
  })
  readonly authStore$: Observable<AuthInterface> =
    this.#authStore.asObservable()

  public set(e: AuthInterface) {
    if (!!e.token.length && !!e.userName.length) {
      this.#authStore.next({ ...this.#authStore.getValue(), ...e })
    }
  }
}
