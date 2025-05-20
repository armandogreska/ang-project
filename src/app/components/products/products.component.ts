import { JsonPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ApiService } from '../../api/api.service'
import Product from '../../interfaces/product.interface'

@Component({
  selector: 'app-products',
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  readonly #apiService = inject(ApiService)
  public products: Product[] = []

  ngOnInit() {
    this.#apiService.getProducts().subscribe((products: Product[]) => {
      products.forEach((e: Product) => this.products.push(e))
    })
  }
}
