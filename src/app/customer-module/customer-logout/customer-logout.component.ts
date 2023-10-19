import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/Services/Registerservice.service';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent {

  constructor(private authService:RegisterServiceService, private router: Router) {
    //this.authService.logout();
    this.router.navigate(['/signin']); // Redirect to login page after logout
  }
}
