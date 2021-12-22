import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataShareService {

  snsVal:any={
    searchText:'on',
    sortValue:''
  }

  private searchSortvalue:any= new BehaviorSubject<any>(this.snsVal);

  getSearchSort(){
    return this.searchSortvalue.asObservable(this.snsVal);
  }

  updateSearch(searchText:string){
    this.snsVal.searchText = searchText;
    this.searchSortvalue.next(this.snsVal);
  }

  updateSort(sortValue:string){
    this.snsVal.sortValue = sortValue
    this.searchSortvalue.next(this.snsVal);
  }
  
}
