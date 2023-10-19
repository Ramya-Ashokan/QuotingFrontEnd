import { Injectable } from '@angular/core';
import { pList } from '../modules/ProductList';
import { Product,Feature,Products } from '../modules/Product';
import { Quote } from '../modules/Quote'; 
import { qList } from '../modules/QuoteList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
 pList:Products[]=[];
 //allLocation:Location[]=[];
quote:any;
quoteList: Quote[]=[] ;
url:string="http://localhost:8003/product";
locationUrl="http://localhost:8003/locations"
quoteUrl:string="http://localhost:8004/quote"
  constructor(private httpClient:HttpClient) { 
    //this.pList=pList;
    // this.qList=qList;
  }
  getProducts()
  {
   //return this.pList;
   return this.httpClient.get(this.url);
  }
  addQuote(quote:Quote): Observable<any>
  {
    console.log(quote);
    this.quoteList.push(quote);
    console.log(this.quoteList);
   return this.httpClient.post(this.quoteUrl+"/add",quote)
  }
  getQuote(userEmail:string): Observable<any>
  {
   console.log(userEmail);
    return this.httpClient.get(this.quoteUrl+"/"+userEmail)
  }
  // searchByName(pList: any[], searchPlan: string): any[] {
  //   searchPlan = searchPlan.toLowerCase();
  //   return pList.filter(pList=> pList.pname.toLowerCase().includes(searchPlan));
  // }
  getProductsByPriceRange(minPrice:any, maxPrice:any){
return this.httpClient.get(this.url+"/search/"+minPrice+"/"+maxPrice);

  }

getFeatures(): Feature[] {
  // Logic to fetch features from an API or any data source
  // Return an array of Feature objects
  return [
    { name: 'Feature 1', isChecked: false },
    { name: 'Feature 2', isChecked: true },
    // Add more features as needed
  ];}
addProducts(newProduct:Products)
{
return this.httpClient.post(this.url+"/add",newProduct);
}
getProductsByLocationId(locationId:any){
  console.log(locationId);
  return this.httpClient.get(this.url+"/loc/"+locationId)
}

getAllLocation()
{
  return this.httpClient.get(this.locationUrl);
}

getProductsByProductType(locationId:any,productType:any)
{
  return this.httpClient.get(this.url+"/"+locationId+"/"+productType);
}


deleteById(dProductId:any)
{
 return this.httpClient.delete(this.url+"/"+dProductId);
 
}
getProductById(editProductId:any)
{
  console.log(editProductId);
 return  this.httpClient.get(this.url+"/edit/"+editProductId);
}


deleteByIdEmailQuote(userEmail:any,productId:any)
{
  console.log("deletequote",userEmail,productId);
  return this.httpClient.delete(this.quoteUrl+"/delete/"+userEmail+"/"+productId);
}
removeQuote(p:Quote){
  console.log(p);
  return this.httpClient.post(this.quoteUrl+"/remove",p);
}
editProducts(productId:any,editProduct:any)
{
  console.log(productId,editProduct);
  return this.httpClient.post(this.url+"/edit/"+productId,editProduct);
}

getProductsByDefaultLocation(regLocationName:any)
{
  console.log("reg location",regLocationName);
 return  this.httpClient.get(this.url+"/"+regLocationName)
}

searchByName(locationId:any,productName:any)
{
  console.log(locationId,productName);
  return this.httpClient.get(this.url+"/searches/"+locationId+"/"+productName);
}
}
