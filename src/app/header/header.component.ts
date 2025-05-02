import { Component } from '@angular/core'
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-header',
  imports: [LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
