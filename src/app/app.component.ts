import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { ApiService } from './api/api.service'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {}
