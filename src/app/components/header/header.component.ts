import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs'
import AuthInterface from '../../interfaces/auth.interface'
import { AuthStore } from '../../store/auth.store'
import { LoggedComponent } from '../logged/logged.component'
import { LoginComponent } from '../login/login.component'
import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-header',
  imports: [LoginComponent, LoggedComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isAuthenticated = false
  readonly #destroyRef = inject(DestroyRef)
  readonly #authStore = inject(AuthStore)
  readonly #authStore$: Observable<AuthInterface> = this.#authStore.authStore$

  ngOnInit() {
    this.#authStore$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((res: AuthInterface) => {
        this.isAuthenticated = res.isAuthenticated
      })
  }
}
