import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "product",
    pathMatch: 'full'
  },
  {
    path: "product",
    component: ProductsListComponent
  },
  { 
    path: 'productDetail/:id',
    component: ProductComponent 
  },
  { 
    path: 'cart', 
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
