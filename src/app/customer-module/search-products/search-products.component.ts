import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Products ,Location} from 'src/app/modules/Product';
import { pList } from 'src/app/modules/ProductList';
import { Quote } from 'src/app/modules/Quote';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit{
priceRange:string='';
searchResults:any="";
allLocation:Location[]=[];
location:any='';
productName:string='';
selectedLocation:any='';
quantity=1;
  subscription:any;
  quoteObject:any
constructor(private pService:ProductservicesService)
{
  
}
ngOnInit(): void {
  this.pService.getAllLocation().subscribe((locationList:any) => {
    this.allLocation = locationList;
    console.log("Location List", this.allLocation);
  });

}




// search() {
//   const [minPrice, maxPrice] = this.priceRange.split('-').map(val => parseFloat(val.trim()));

//   if (!isNaN(minPrice) && !isNaN(maxPrice)) {
//     this.pService.getProductsByPriceRange(minPrice, maxPrice)
//       .subscribe((products) => {this.searchResults=products;
        

//         console.log(products);
//       });} 
//   else {
//         console.log("Invalid price range format. Please enter a valid range.");
//       }
// }
onSearch():void{
  console.log('hi');
  console.log('Location',this.selectedLocation);
  console.log("productName",this.productName);
  if(this.selectedLocation && this.productName)
  {
    this.pService.searchByName(this.selectedLocation,this.productName)
    .subscribe(
      (data:any)=>{
        this.searchResults=data;//set the result
      },
      (error: any)=>{
      console.error('Error',error);
      this.searchResults=[];//Clear search results on error
      }
    );
    this.location='';
    this.productName='';
  }
}

addQuote(product:any)
{
  

  const email=JSON.parse(localStorage.getItem('email')+'');


 // Extract subscription names from the list of location objects

const subscriptionNames: any[] = product.subscriptions.map((subscription: { subscriptionName: any; }) => subscription.subscriptionName);
const locationNames:any[]=product.locations.map((location:{locationName:any;})=>location.locationName);
// Join the location names into a single string (if you want to store them as a comma-separated string)
const subscriptionString = subscriptionNames.join(', ');
const locationString=locationNames.join(', ');
   const quote=new Quote(email,product.productId,product.productName,product.productType,product.customerType,product.features,product.validity,product.price,subscriptionNames,locationNames,this.quantity,product.price);
  //this.pService.addQuote(quote).subscribe((quoteObj: any)=>{this.quoteObject=quoteObj});
  // this.selectedProducts=this.pService.getQuote();
 
  this.pService.addQuote(quote).subscribe(
    (quoteObj: any) => {
      this.quoteObject = quoteObj;
      Swal.fire({
        title: 'Quote Requested!',
        text: 'choosed plan added to quote list successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
    (error: any) => {
      console.error('Error adding quote:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to request a quote. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  );
}

}