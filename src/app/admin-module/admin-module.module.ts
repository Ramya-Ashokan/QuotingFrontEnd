import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminViewPrductsComponent } from './admin-view-prducts/admin-view-prducts.component';
import { EditProductComponent } from './edit-product/edit-product.component';
@NgModule({
  declarations: [
    AdminHomeComponent,
    CreateProductComponent,
    AdminViewPrductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModuleModule { }
