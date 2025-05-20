import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(
        m => m.ProductDetailComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/products/products.component').then(
        m => m.ProductsComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        m => m.NotFoundComponent,
      ),
    pathMatch: 'full',
  },
]
