import { Component, inject } from '@angular/core'
import { ClickOutsideDirective } from '../../directives/click-outside.directive'
import { AuthStore } from '../../store/auth.store'

@Component({
  selector: 'app-logged',
  imports: [ClickOutsideDirective],
  templateUrl: './logged.component.html',
  styleUrl: './logged.component.scss',
})
export class LoggedComponent {
  public isLoggedLayerOn = false
  readonly #authStore = inject(AuthStore)

  public logout() {
    this.#authStore.reset()
  }
}
