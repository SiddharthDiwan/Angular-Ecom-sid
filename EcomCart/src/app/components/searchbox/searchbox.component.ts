import { Component, Input, OnInit } from '@angular/core';
import { SearchDataShareService } from 'src/app/services/search-data-share.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {

  sortValue:string='';
  searchText:string='';

  @Input()
    showmenu:boolean =false;
  constructor(private searchDataShareService:SearchDataShareService){}

  updatesearch(searchText:string){
    this.searchDataShareService.updateSearch(searchText);
  }

  updatesort(sortValue:string){
    this.searchDataShareService.updateSort(sortValue);
  }
}

