import { Component } from '@angular/core';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { pList } from 'src/app/modules/ProductList';
@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
searchPlan:string='';
searchResults:any[]=pList;
constructor(private pService:ProductservicesService)
{
  
}
search() {
  this.searchResults = this.pService.searchByName(this.searchResults, this.searchPlan);
}
}
