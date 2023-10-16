import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../modules/Product';

@Pipe({
  name: 'filterByLocation'
})
export class FilterByLocationPipe implements PipeTransform {

  transform(products:Product[],location:string): Product[] {
    if(location=='All')
    {
      return products;
    }
    return products.filter(product=>product.location==location);
  }


}
