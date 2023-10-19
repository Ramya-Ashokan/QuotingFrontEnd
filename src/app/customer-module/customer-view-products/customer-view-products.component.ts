import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Product ,Location, Products} from 'src/app/modules/Product';
import { ptypes,locations, states } from 'src/app/modules/ProductList';
import { Quote } from 'src/app/modules/Quote';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customer-view-products',
  templateUrl: './customer-view-products.component.html',
  styleUrls: ['./customer-view-products.component.css']
})
export class CustomerViewProductsComponent implements OnInit{
//products:Product[]=[];
selectedProducts:Products[]=[];
ptypes=ptypes;
locations=locations;
//location:any='All';
ptype:any='All';
successMessage:string='';


//new
selectedLocation:any;
states=states;
location:any;
products:any;
allLocation:Location[]=[];
selectedPlanType:any='All';
  errorMessage: string='';
  //quote:Quote;
  quantity=1;
  subscription:any;
  quoteObject:any
 //selectedLocationName: string; // Declare a variable to store the selected location name this.selectedLocationName = this.location.locationName;
constructor(private pService:ProductservicesService,private router:Router)
{
 
  //this.pService.getProduct().subscribe((pro:any)=>{this.proList=pro});


  // this.pService.getAllLocation().subscribe((locationList:any)=>{this.allLocation=locationList});
  // console.log("Location List",this.allLocation);
  // this.pService.getProducts().subscribe((pList:any)=>{this.products=pList});
  // console.log(location);
  // console.log(this.products);

  //this.view();

}
// view(){
//   this.products=this.pService.getProducts();
// }


ngOnInit(): void {
  this.pService.getAllLocation().subscribe((locationList:any) => {
    this.allLocation = locationList;
    console.log("Location List", this.allLocation);
  });
   const regLocationName=JSON.parse(localStorage.getItem('registerState')+'');
this.pService.getProductsByDefaultLocation(regLocationName).subscribe((pList:any)=>{
  this.products=pList;
});
  // this.pService.getProducts().subscribe((pList:any) => {
  //   this.products = pList;
  //   console.log(this.products);
  // });
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

onLocationSelect()
{
  
localStorage.setItem('currentLocation',JSON.stringify(this.selectedLocation));
  console.log("hi");
  console.log(this.selectedLocation);

this.pService.getProductsByLocationId(this.selectedLocation).subscribe((pList:any)=>{this.products=pList});

console.log(this.products);
} 
onProductTypeSelect()
{
  this.errorMessage = ''; // Clear the error message before making the API call
  
   if(this.selectedPlanType==='Wired' || this.selectedPlanType==='Wireless') {
    this.pService.getProductsByProductType(this.selectedLocation,  this.selectedPlanType).subscribe((pList:any)=>{
      console.log("Products received:", pList);
      if (pList && pList.length > 0) {
        this.products = pList;
      } else {
        this.products = []; // Set products to an empty array if the response is empty
        this.errorMessage = 'No plans available for the selected plan type.';
      }
    },
      

      
      (error:any)=>
      {
        console.error('Error fetching products:', error);
          this.products = []; // Set products to an empty array in case of error
          this.errorMessage = 'No plans available for the selected plan type.';
    } );
    this.errorMessage = '';
  }
  if(this.selectedPlanType==='All')
  {
    this.onLocationSelect();
    this.products = []; // Set products to an empty array if the response is empty

  }

}

}


  // const quote:Quote={pname,price,term};
  // this.router.navigate(['/quote',quote]);
  // this.selectedProducts.push(product);
  //  this.router.navigate(['/quote'], { state: { selectedProducts: this.selectedProducts } })
  // this.successMessage='Added to QuoteList';