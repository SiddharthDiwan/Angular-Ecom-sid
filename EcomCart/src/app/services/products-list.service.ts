import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  url:string='./../../assets/prodjsondata.json'
  constructor(private httpClient:HttpClient) { }

  getproduct():any{
    return this.httpClient.get(this.url);
  }
}
