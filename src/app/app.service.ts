import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly http: HttpClient = inject(HttpClient)

  public getPosts(): Observable<object> {
    return this.http.get<object>('http://localhost/?rest_route=/wp/v2/posts')
  }
}
