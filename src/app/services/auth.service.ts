import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs'
import { environment } from '../../environments/environment'
import Token from '../models/Token'
import User from '../models/User'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<object | null>(null)
  private token: string | null
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  )

  constructor(private _http: HttpClient) {
    this.token = null
  }

  private setItem(k: string, v: string): void {
    localStorage.setItem(k, v)
  }

  private getItem(k: string): string | null {
    return localStorage.getItem(k)
  }

  private removeItem(k: string): void {
    localStorage.removeItem(k)
  }

  private getIsAuthenticated(): boolean {
    if (!this.token) {
      return false
    }
    const payload = JSON.parse(atob(this.token.split('.')[1]))
    const expirationDateMs: number = payload.exp * 1000
    return Date.now() < expirationDateMs
  }

  private logout(): void {
    if (typeof this.token == 'string') {
      this.removeItem(this.token)
    }
  }

  public login(user: User) {
    // http://localhost/index.php/wp-json/jwt-auth/v1/token

    return this._http
      .post(environment.domain + environment.api + 'jwt-auth/v1/token', user)
      .pipe(
        tap((res: Token) => {
          if (res.token && res.token.length > 0) {
            localStorage.setItem('token', res.token)
          }
        }),
        catchError(error => {
          console.log('>>>>>>>>>> error: ', error)
          return throwError(() => error)
        }),

        // return this.http
        // .post(`https://hololifoods.dk/wp-json/jwt-auth/v1/token`, {
        //   username: credentials.email,
        //   password: credentials.password,
        // })
        // .pipe(
        //   catchError((error) => {
        //     console.log("3");
        //     return throwError(error);
        //   }),
        // map((data: any) => data),
        // switchMap((data) => {
        //   console.log(data);
        //   localStorage.setItem("email", data.user_email);
        //   from(
        //     Storage.set({
        //       key: "email",
        //       value: JSON.stringify(data.user_email),
        //     })
        //   );
        //   return from(Storage.set({ key: TOKEN_KEY, value: data.token }));
        // }),
        // tap((_) => {
        //   this.isAuthenticated.next(true);
        // })
      )
  }
}
