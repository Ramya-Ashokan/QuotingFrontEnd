import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../modules/Product';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(products:Product[],ptype:string): Product[]{
    if(ptype=='All')
    {
    return products;
  }
return products.filter(product=>product.ptype==ptype);
}

}
