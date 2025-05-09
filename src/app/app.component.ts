import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterModule, RouterOutlet } from '@angular/router'
import { ApiService } from './api/api.service'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { LoadingStore } from './store/loading.store'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent implements OnInit {
  readonly #loadingStore = inject(LoadingStore)
  readonly #destroyRef = inject(DestroyRef)
  public isLoadingOn = false

  ngOnInit(): void {
    this.#loadingStore.loadingStore$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((res: boolean) => {
        this.isLoadingOn = res
      })
  }
}
