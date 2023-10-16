import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Product ,Location, Products} from 'src/app/modules/Product';
import { ptypes,locations, states } from 'src/app/modules/ProductList';
import { Quote } from 'src/app/modules/Quote';
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

  this.pService.getProducts().subscribe((pList:any) => {
    this.products = pList;
    console.log(this.products);
  });
}



addQuote(product:Products)
{
  
  // const quote:Quote={pname,price,term};
  // this.router.navigate(['/quote',quote]);
  // this.selectedProducts.push(product);
  //  this.router.navigate(['/quote'], { state: { selectedProducts: this.selectedProducts } })
  // this.successMessage='Added to QuoteList';
  this.pService.addQuote(product);
 
  this.selectedProducts=this.pService.getQuote();
  
}

onLocationSelect()
{
  console.log("hi");
  console.log(this.selectedLocation);

this.pService.getProductsByLocationName(this.selectedLocation).subscribe((pList:any)=>{this.products=pList});
console.log(this.products);
} 


}
