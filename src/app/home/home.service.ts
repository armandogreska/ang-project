import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly http: HttpClient = inject(HttpClient)

  public getPosts(): Observable<object> {
    return this.http.get<object>(
      environment.apiUrl + '?rest_route=/wp/v2/posts',
    )
  }
}
