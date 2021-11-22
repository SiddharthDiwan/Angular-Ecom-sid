import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudOpnService {

  JsonUrl:string='http://localhost:3000'
  constructor(private httpClient:HttpClient) { }

  getAllProducts():any{
    return this.httpClient.get(this.JsonUrl + '/products');
  }

  getAllCartProducts():any{
    return this.httpClient.get(this.JsonUrl + '/' + "cart" );
  }

  deleteCartItems(prodid:any){
    return this.httpClient.delete(this.JsonUrl + '/' + "cart" + '/' + prodid);
  }

  addToCart(product:any){
    return this.httpClient.post(this.JsonUrl + '/cart', product);
  }
}
