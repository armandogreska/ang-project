import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    // private authService: AuthenticationService,
  ) {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  }

  onSubmit() {
    console.log('>>>>>>>>>> onSubmit(): ', this.loginForm.value)
    // const loading = await this.loadingController.create();
    // await loading.present();
    // this.authService.login(this.loginForm.value).subscribe(
    //   result => {
    //     console.log('succes');
    //     loading.dismiss();
    //     this.router.navigateByUrl('/tabs', { replaceUrl: true });
    //   },
    //   async error => {}
    // );
  }
}
