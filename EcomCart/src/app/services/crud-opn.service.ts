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

  getProductById(Id:any):any{
    return this.httpClient.get(this.JsonUrl + '/products/' + Id);
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

  addProduct(product:any):any{
    return this.httpClient.post(this.JsonUrl + '/products', product);
  }

  updateProduct(product:any, id:any){
    return this.httpClient.put(this.JsonUrl + '/products' + '/' + id , product);
  }
}
