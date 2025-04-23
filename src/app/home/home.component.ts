import { JsonPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public posts: object = {}
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getPosts().subscribe(posts => {
      this.posts = posts
      console.log('>>>>>>>>>> cmp: ', this.posts)
    })
  }
}
