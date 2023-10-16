import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'signin',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
