import { Component } from '@angular/core'
import { CartComponent } from '../cart/cart.component'
import { LoginComponent } from '../login/login.component'
import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-header',
  imports: [LoginComponent, SearchComponent, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
