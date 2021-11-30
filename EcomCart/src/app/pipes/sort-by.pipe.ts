import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(product: any, sortInput: string): any[] {
   
    function ascendingsort( a:any, b:any ) {
      return a.prodprice - b.prodprice;
    }

    function ascendingsortbyId( a:any, b:any ) {
      return a.id - b.id;
    }

    function descendingsort( a:any, b:any ) {
      return b.prodprice - a.prodprice;
    }
    
    if(sortInput=="Acsending"){
      return product.sort( ascendingsort );
    }else if(sortInput=="Descending"){
      return product.sort( descendingsort );
    }
    else{
      return product.sort(ascendingsortbyId);
    }
   
  }

}
