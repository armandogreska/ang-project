import { Component, DOCUMENT, inject } from '@angular/core'
import { ClickOutsideDirective } from '../../directives/click-outside.directive'

@Component({
  selector: 'app-logged',
  imports: [ClickOutsideDirective],
  templateUrl: './logged.component.html',
  styleUrl: './logged.component.scss',
})
export class LoggedComponent {
  public isLoggedLayerOn = false
  private doc = inject(DOCUMENT)
}
