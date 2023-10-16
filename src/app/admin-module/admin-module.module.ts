import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminHomeComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModuleModule { }
