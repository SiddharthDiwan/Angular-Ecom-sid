import { Component, OnInit } from '@angular/core';
import { CrudOpnService } from 'src/app/services/crud-opn.service';

@Component({
  selector: 'app-products-on-page',
  templateUrl: './products-on-page.component.html',
  styleUrls: ['./products-on-page.component.css']
})
export class ProductsOnPageComponent implements OnInit{

  searchText:string='';
  sortValue:string='';
  productslist:any=[];
  errMsg:string='';
  
  constructor(private crudOpnService:CrudOpnService) { 
  }

  ngOnInit(){
    this.crudOpnService.getAllProducts().subscribe((res: any) => this.productslist = res,
                                                  (err: string) => this.errMsg = err );
  }

  addToCart(product:any){
    this.crudOpnService.addToCart(product).subscribe(data=>{})
  }

}
