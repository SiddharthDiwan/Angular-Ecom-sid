import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-products-on-page',
  templateUrl: './products-on-page.component.html',
  styleUrls: ['./products-on-page.component.css']
})
export class ProductsOnPageComponent {

  productslist:any=[];
  errMsg:string='';
  
  constructor(private productsListService:ProductsListService) { 
    productsListService.getproduct().subscribe((res: any) => this.productslist = res,
                                               (err: string) => this.errMsg = err    );
  }



}
