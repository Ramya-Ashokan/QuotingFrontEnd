import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AdminViewPrductsComponent } from './admin-view-prducts/admin-view-prducts.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
  
  path:'adminHome',
  component:AdminHomeComponent
  },
  {
    path:'addproducts',
    component:CreateProductComponent
  },
  {
    path:'adminViewProducts',
    component:AdminViewPrductsComponent
  },
  {
    path:'editproducts/:productId',
    component:EditProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
