import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient)
  readonly #domain: string = environment.domain
  readonly #api_wc: string = environment.api_wc

  public getProducts(): Observable<object> {
    return this.http.get(this.#domain + this.#api_wc + '/products')
  }
}
