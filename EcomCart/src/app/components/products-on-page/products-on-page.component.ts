import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-products-on-page',
  templateUrl: './products-on-page.component.html',
  styleUrls: ['./products-on-page.component.css']
})
export class ProductsOnPageComponent {

  constructor(private productsListService:ProductsListService) { }

  productslist:any= this.productsListService.getproduct();
 

}
