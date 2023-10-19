import { Injectable } from '@angular/core';
import { Customer } from '../modules/Customer';
import { cList } from '../modules/CustomerList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
 
  private isAuthenticated = false;
  url:string="http://localhost:8001/user";

  constructor(private httpClient:HttpClient) {
   }
  addCustomer(newCustomer:Customer)
  {
    cList.push(newCustomer);
        console.log("customer list",cList);
        return this.httpClient.post(this.url,newCustomer);
  }

  login(email:any,password:any){
    console.log(email,password);
const logs={email,password};
return this.httpClient.post<string>(this.url+"/login",logs);

  }


  logout() {
    this.isAuthenticated = false;
  }


  // getUser(): Observable<any> {
  //   // Retrieve user data from local storage
  //   const loginCustomer = localStorage.getItem('currentUser');
  
  //   // Check if user data exists in local storage
  //   if (loginCustomer) {
  //     // Parse the JSON string and return it as an observable
  //     return of(JSON.parse(loginCustomer));
  //   } else {
  //     // If no user data found, return an empty observable or handle it as needed
  //     return of(null);
  //   }
 // }
}
