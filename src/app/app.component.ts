import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { ApiService } from './api/api.service'
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {}
