import { Component, OnInit } from '@angular/core';
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
export class QuotingListComponent implements OnInit{
//quote:any;
//quotes=qList;
selectedProducts:any;
email:any='';
errorMessage='';
constructor(private pService:ProductservicesService)
{
  // this.route.queryParams.subscribe(params=>{
  //   this.quote=params;
  // });
  // this.view();


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

ngOnInit(): void {
  //this.errorMessage='';
  this.email = JSON.parse(localStorage.getItem('email') + '');
  console.log(this.email);
  
  this.pService.getQuote(this.email).subscribe(
    (qList: any) => {
      this.selectedProducts = qList;
      console.log('quoting list in quote page', this.selectedProducts);
    },
    (error) => {
      if (this.selectedProducts && this.selectedProducts.length === 0) {
        console.error('Error fetching quoting list:', error);
        this.errorMessage = "No products selected for quote";
      }
    }
  );
}

deleteByIdEmail(p:any)
{
  console.log(p.userEmail,p.productId);
  this.pService.deleteByIdEmailQuote(p.userEmail,p.productId).subscribe();
  this.ngOnInit();
}
removeQuote(p:any)
{
  console.log(p);
  this.pService.removeQuote(p).subscribe();
}








getTotalPrice(): any {
  if (this.selectedProducts) {
    return this.selectedProducts.reduce((total: any, product: { subTotal: any; }) => total + product.subTotal, 0);
  }
  return 0; // return 0 or any default value when selectedProducts is null or undefined
}

}
