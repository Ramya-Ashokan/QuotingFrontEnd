import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { QuotingListComponent } from './quoting-list/quoting-list.component';
import { FormsModule } from '@angular/forms';
import { FilterByLocationPipe } from './pipes/filter-by-location.pipe';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { SearchProductsComponent } from './search-products/search-products.component';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// @NgModule({
//   imports: [
//     // ...
//     // MatSnackBarModule,
//     // ...
  
//   ],
//   declarations: [
   
//   ],
//   // ...
// })
export class AppModule { }

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerViewProductsComponent,
    QuotingListComponent,FilterByLocationPipe,FilterByTypePipe, CustomerLogoutComponent,
    SearchProductsComponent
  ],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule,FormsModule,  FormsModule
  ]
})
export class CustomerModuleModule { }
