import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Feature, Products, Subscription,Location } from 'src/app/modules/Product';
import { customerTypes, productTypes, states, subscriptions } from 'src/app/modules/ProductList';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  editProduct:any;
  productTypes=productTypes;
 customerTypes=customerTypes;
features:Feature[]=[];
location=states;
sl:Location[]=[];
//selectedStates:String='';
//productType:any;
subproduct=subscriptions ;
sp:Subscription[]=[];
constructor(private route:ActivatedRoute,private pService:ProductservicesService)
{
  this.editProduct=new Products('','','',this.features,'',0,this.sp,this.sl);
features:[this.editProduct.features[0],this.editProduct.features[1],this.editProduct.features[2],this.editProduct.features[3]]
}
  
ngOnInit() {
  // Retrieve the product ID from the route parameter
  const productId = this.route.snapshot.params['productId'];

  // Use the product ID to fetch the product data from your service
  this.pService.getProductById(productId).subscribe((product: any) => {
      this.editProduct = product;
      console.log(this.editProduct);
  });
}

onSelectedSubProducts(spu:any)
{
  this.sp.unshift(spu);
}
onSelectionChange(state:any)
{
  console.log(state);
  this.sl.unshift(state);
}

onSubmit(form: NgForm) {
  
    this.editProduct.subscriptions=this.sp;
    this.editProduct.locations=this.sl;
  this.pService.editProducts(this.editProduct.productId ,this.editProduct).subscribe();
 
  console.log('Product Submitted:', this.editProduct);

}
}
