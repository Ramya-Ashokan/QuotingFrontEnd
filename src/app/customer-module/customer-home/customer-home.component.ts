import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/Services/Registerservice.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit{

  userName:any='';
  
  constructor(private rService:RegisterServiceService)
  {
    this.userName=JSON.parse(localStorage.getItem('userName')+'');
  }
  ngOnInit(): void {
   
  

    

 
    
  



  }
  }

