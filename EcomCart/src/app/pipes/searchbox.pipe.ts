import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbox'
})
export class SearchboxPipe implements PipeTransform {

  transform(prod:any, searchText:string):any {
    if(searchText == ''){
      return prod;
    }else {
      return prod.filter ((item:any) =>{
        if(item.prodname.toLowerCase().includes(searchText.toLowerCase())){
          return item;
        }
      })

      }

   
    
  }

}
