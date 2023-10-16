import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductservicesService } from 'src/app/Services/productservices.service';
import { Product, Products,Feature,Subscription,Location} from 'src/app/modules/Product';
import { productTypes,customerTypes, states,subscriptions  } from 'src/app/modules/ProductList';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})


export class CreateProductComponent {
 newProduct:Products;
 productTypes=productTypes;
 customerTypes=customerTypes;
features:Feature[]=[];
location=states;
sl:Location[]=[];
//selectedStates:String='';

subproduct=subscriptions ;
sp:Subscription[]=[];
//selectedsubproduct:String='';

  constructor(private pService:ProductservicesService)
  {
    
  this.newProduct  =new Products('','','',this.features,
  '',0,this.sp,this.sl);

 //console.log(this.selectedStates);
  }
  onSelectionChange(state:any) {
    console.log(state);
  this.sl.unshift(state);
   
  }
  onSelectedSubProducts(sp:any){
    this.sp.unshift(sp);
  }

  onSubmit(form: NgForm) {
    
    this.pService.addProducts(this.newProduct).subscribe();
   
    console.log('Product Submitted:', this.newProduct);

  }

}


