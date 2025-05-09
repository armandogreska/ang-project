import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { LoadingStore } from '../../store/loading.store'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup
  public isLoginLayerOn = false
  readonly #loadingStore = inject(LoadingStore)
  readonly #authService = inject(AuthService)

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  }

  onSubmit() {
    this.#loadingStore.set(true)
    this.#authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.#loadingStore.set(false)
      },
      error(err: object) {
        console.log('>>>>>>>>>> err: ', err)
      },
    })
  }
}
