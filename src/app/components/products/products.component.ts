import { JsonPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ApiService } from '../../api/api.service'

@Component({
  selector: 'app-products',
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private apiService = inject(ApiService)

  public posts: object = {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts
      // console.log('>>>>>>>>>> posts: ', this.posts)
    })
  }
}
