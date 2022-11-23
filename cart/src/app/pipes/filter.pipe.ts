import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productLists: any[],filterString:string,propertyName:any): any[] {
    const result:any=[]

    if(!productLists || filterString=='' || propertyName==''){
      return productLists
    }

    productLists.forEach((product:any)=>{
      if(product(propertyName).trim().toLowerCase().includes(filterString.toLowerCase)){
        result.push(product)
      }
    })

    return result;
  }

}
