import { Component, Input, OnInit } from '@angular/core';
import { CrudOpnService } from 'src/app/services/crud-opn.service';
import { SearchDataShareService } from 'src/app/services/search-data-share.service';

@Component({
  selector: 'app-products-on-page',
  templateUrl: './products-on-page.component.html',
  styleUrls: ['./products-on-page.component.css']
})
export class ProductsOnPageComponent implements OnInit{
  
  searchSortValue:any={};
  searchText1:string='';
  sortValue1:string='';
  pageOfItems: Array<any>=[];
  items = [];
  productslist:any=[];
  errMsg:string='';

  
  constructor(private crudOpnService:CrudOpnService, private searchDataShareService:SearchDataShareService) { 
  }

  ngOnInit(){
    this.crudOpnService.getAllProducts().subscribe((res: any) => {
                                                      this.productslist = res;
                                                      this.items = this.productslist;},
                                                  (err: string) => this.errMsg = err );

    this.searchDataShareService.getSearchSort().subscribe( (res:any) => {
    this.searchSortValue = res;
    this.searchText1 = this.searchSortValue.searchText,
    this.sortValue1 = this.searchSortValue.sortValue
    }
    );
   
    

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  addToCart(product:any){
    this.crudOpnService.addToCart(product).subscribe(data=>{})
  }

}
