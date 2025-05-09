import { Component, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs'
import AuthInterface from '../interfaces/auth.interface'
import { LoginComponent } from '../login/login.component'
import { SearchComponent } from '../search/search.component'
import { AuthStore } from '../store/auth.store'

@Component({
  selector: 'app-header',
  imports: [LoginComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isAuthenticated = false
  readonly #destroyRef = inject(DestroyRef)
  readonly #authStore = inject(AuthStore)
  authStore$: Observable<AuthInterface> = this.#authStore.authStore$

  constructor() {
    this.authStore$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((res: AuthInterface) => {
        this.isAuthenticated = res.isAuthenticated
      })
  }
}
