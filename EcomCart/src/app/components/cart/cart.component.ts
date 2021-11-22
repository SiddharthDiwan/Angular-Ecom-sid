import { Component, OnInit } from '@angular/core';
import { CrudOpnService } from 'src/app/services/crud-opn.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  isCartEmpty:boolean=false;
  errMsg:string='';
  bagPrice:number=0;

  constructor(private crudOpnService:CrudOpnService) {
    this.crudOpnService.getAllCartProducts().subscribe((res: any) => this.cartItems = res,
    (err: string) => this.errMsg = err );

    this.checkCart();

   }

  ngOnInit(): void {
    // this.checkTotal();
  }

  // to check if cart is empty
  checkCart(){
    if (typeof this.cartItems !== 'undefined' && this.cartItems.length > 0) {
      this.isCartEmpty=false;
    }
    else{
    this.isCartEmpty=true;
    }
    this.checkTotal();
  }

  //implement delete functionality
  deleteCartItems(prodid:any){
    this.crudOpnService.deleteCartItems(prodid).subscribe((res: any) => this.cartItems = res);
    this.checkCart();
    
  }

  checkTotal(){
    this.cartItems.forEach((prod: { prodprice: number; }) => { this.bagPrice += prod.prodprice;   
    });
  }

}
