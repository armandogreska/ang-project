import { JsonPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api/api.service'

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public posts: object = {}
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts
      // console.log('>>>>>>>>>> cmp: ', this.posts)
    })
  }
}
