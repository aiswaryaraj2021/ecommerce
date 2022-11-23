import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  //  all-products
  {
    path:'',component:AllProductsComponent
  },
  //  wishlist
  {
    path:'wishlist',component:WishlistComponent
  },
  //  cart
  {
    path:'cart',component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
