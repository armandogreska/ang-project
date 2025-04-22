import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
})
export class AppComponent implements OnInit {
  public title = 'ang-project'

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getPosts().subscribe(posts => {
      console.log('>>>>>>>>>> cmp: ', posts)
    })
  }
}
