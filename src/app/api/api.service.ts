import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient)

  public getPosts(): Observable<object> {
    return this.http.get<object>(
      environment.domain + environment.api + 'wp/v2/posts',
    )
  }
}
