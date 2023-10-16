import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { QuotingListComponent } from './quoting-list/quoting-list.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { SearchProductsComponent } from './search-products/search-products.component';

const routes: Routes = [
  {
  path:'customerHome',
  component:CustomerHomeComponent
  },
  {
    path:'Cusview products',
    component:CustomerViewProductsComponent
    },
    {
      path:'quote',
      component:QuotingListComponent
      },
      {
        path:'logout',
        component:CustomerLogoutComponent
      },
      {
        path:'search products',
        component:SearchProductsComponent
      }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
