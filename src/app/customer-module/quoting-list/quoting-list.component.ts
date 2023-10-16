import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Products } from 'src/app/modules/Product';
import { Quote } from 'src/app/modules/Quote';
import { qList } from 'src/app/modules/QuoteList';

@Component({
  selector: 'app-quoting-list',
  templateUrl: './quoting-list.component.html',
  styleUrls: ['./quoting-list.component.css']
})
export class QuotingListComponent {
//quote:any;
//quotes=qList;
selectedProducts:Products[]=[];
constructor(private route:ActivatedRoute,private pService:ProductservicesService)
{
  // this.route.queryParams.subscribe(params=>{
  //   this.quote=params;
  // });
  // this.view();
this.selectedProducts=this.pService.getQuote();
console.log('quoting list in quote page',this.selectedProducts);
//  this.route.params.subscribe(params=>{

//  });
//  const state = window.history.state;
//  if (state && state.selectedProducts) {
//    this.selectedProducts = state.selectedProducts;
   
//  }
}
// view(){

//   this.quotes=this.pService.getQuote();
// }
getTotalPrice():number{
  return this.selectedProducts.reduce((total,product)=>total+product.price,0);
}
}
