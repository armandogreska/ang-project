import { Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductsComponent } from './products/products.component'

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
]
