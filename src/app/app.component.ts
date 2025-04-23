import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
})
export class AppComponent {}
