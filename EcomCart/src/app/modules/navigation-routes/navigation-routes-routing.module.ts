import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ProductmanageComponent } from 'src/app/components/productmanage/productmanage.component';
import { ProductsOnPageComponent } from 'src/app/components/products-on-page/products-on-page.component';

const routes: Routes = [
  {path:'home', component:ProductsOnPageComponent},
  {path:'cart', component:CartComponent},
  {path:'manageProduct', component:ProductmanageComponent},
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutesRoutingModule { }
