import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(
        c => c.ProductDetailComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/products/products.component').then(
        c => c.ProductsComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        c => c.NotFoundComponent,
      ),
    pathMatch: 'full',
  },
]
