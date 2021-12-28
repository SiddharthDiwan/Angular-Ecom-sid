import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsOnPageComponent } from './components/products-on-page/products-on-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { NavigationRoutesRoutingModule } from './modules/navigation-routes/navigation-routes-routing.module';
import { SearchboxPipe } from './pipes/searchbox.pipe';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortByPipe } from './pipes/sort-by.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ProductmanageComponent } from './components/productmanage/productmanage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsOnPageComponent,
    CartComponent,
    SearchboxPipe,
    SearchboxComponent,
    SortByPipe,
    ProductmanageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,NavigationRoutesRoutingModule,FormsModule,JwPaginationModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
