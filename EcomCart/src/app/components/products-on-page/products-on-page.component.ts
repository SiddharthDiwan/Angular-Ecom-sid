import { Component, Input, OnInit } from '@angular/core';
import { CrudOpnService } from 'src/app/services/crud-opn.service';
import { SearchDataShareService } from 'src/app/services/search-data-share.service';

@Component({
  selector: 'app-products-on-page',
  templateUrl: './products-on-page.component.html',
  styleUrls: ['./products-on-page.component.css']
})
export class ProductsOnPageComponent implements OnInit{

  // @Input()
  //   searchText:string='';

  // @Input()
  //   sortValue:string='';
  
  searchSortValue:any={};
  searchText1:string='';
  sortValue1:string='';

  productslist:any=[];
  errMsg:string='';

  
  constructor(private crudOpnService:CrudOpnService, private searchDataShareService:SearchDataShareService) { 
  }

  ngOnInit(){
    this.crudOpnService.getAllProducts().subscribe((res: any) => this.productslist = res,
                                                  (err: string) => this.errMsg = err );

    this.searchDataShareService.getSearchSort().subscribe( (res:any) => {
    this.searchSortValue = res;
    this.searchText1 = this.searchSortValue.searchText,
    this.sortValue1 = this.searchSortValue.sortValue
    }
    );
   
  }

  addToCart(product:any){
    this.crudOpnService.addToCart(product).subscribe(data=>{})
  }

}
