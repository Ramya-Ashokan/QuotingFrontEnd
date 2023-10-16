import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { Customer } from './modules/Customer';
import { CustomerModuleModule } from './customer-module/customer-module.module';
import { CustomerModuleRoutingModule } from './customer-module/customer-module-routing.module';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { AdminModuleRoutingModule } from './admin-module/admin-module-routing.module';
import { FormsModule } from '@angular/forms';
// import { FilterByLocationPipe } from './customer-module/pipes/filter-by-location.pipe';
// import { FilterByTypePipe } from './customer-module/pipes/filter-by-type.pipe';
import { ProductservicesService } from './Services/productservices.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
   
    // FilterByLocationPipe,
    // FilterByTypePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomerModuleModule,
    CustomerModuleRoutingModule,
    AdminModuleModule,
    AdminModuleRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
