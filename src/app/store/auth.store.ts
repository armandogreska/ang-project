import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class StoreStore {
  // Init with null to filter out the first value in a guard!
  readonly #isAuthenticated = new BehaviorSubject<boolean>(false)
  readonly isAuthenticated$ = this.#isAuthenticated.asObservable()
}
