import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  readonly #route = inject(ActivatedRoute)
  id: string | undefined

  ngOnInit() {
    this.id = this.#route.snapshot.params['id']
  }
}
