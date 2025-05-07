import { Component } from '@angular/core'
import { LoginComponent } from '../login/login.component'
import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-header',
  imports: [LoginComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
