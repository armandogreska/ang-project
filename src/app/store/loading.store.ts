import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoadingStore {
  readonly #loadingStore = new BehaviorSubject<boolean>(false)
  readonly loadingStore$ = this.#loadingStore.asObservable()

  public set(e: boolean) {
    this.#loadingStore.next(e)
  }
}
