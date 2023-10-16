import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
  
  path:'adminHome',
  component:AdminHomeComponent
  },
  {
    path:'addproducts',
    component:CreateProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
