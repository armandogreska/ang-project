import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup

  constructor(private _authService: AuthService) {
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
    // const loading = this.loadingController.create();
    //  loading.present();
    this._authService.login(this.loginForm.value).subscribe({
      next: () => {
        console.log(
          '>>>>>>>>>> localStorage token: ',
          localStorage.getItem('token'),
        )
      },
      error(err: object) {
        console.log('>>>>>>>>>> err: ', err)
      },
    })
  }
}
