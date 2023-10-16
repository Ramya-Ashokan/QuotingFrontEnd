import { Injectable } from '@angular/core';
import { pList } from '../modules/ProductList';
import { Product,Feature,Products } from '../modules/Product';
import { Quote } from '../modules/Quote'; 
import { qList } from '../modules/QuoteList';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
 pList:Products[]=[];
 //allLocation:Location[]=[];
quote:any;
quoteList: Products[]=[] ;
url:string="http://localhost:8003/product";
locationUrl="http://localhost:8003/locations"

  constructor(private httpClient:HttpClient) { 
    //this.pList=pList;
    // this.qList=qList;
  }
  getProducts()
  {
   //return this.pList;
   return this.httpClient.get(this.url);
  }
  addQuote(quote:Products)
  {
   this.quoteList.push(quote);
  }
  getQuote()
  {
    console.log("quoting list",this.quoteList);
    return this.quoteList;
  }
  searchByName(pList: any[], searchPlan: string): any[] {
    searchPlan = searchPlan.toLowerCase();
    return pList.filter(pList=> pList.pname.toLowerCase().includes(searchPlan));
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
getProductsByLocationName(locationId:any){
  console.log(locationId);
  return this.httpClient.get(this.url+"/loc/"+locationId)
}

getAllLocation()
{
  return this.httpClient.get(this.locationUrl);
}
}
