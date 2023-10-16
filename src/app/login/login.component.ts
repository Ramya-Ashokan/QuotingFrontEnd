import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../Services/Registerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm:FormGroup;
e='ramya.a@prodapt.com';
pswd="Ramya@12";
e1='admin123@gmail.com';
pswd1='Admin@123';
successMessage:any;
errorMessage:any;
  loginError: string|any;

constructor(private formBuilder:FormBuilder,private router:Router,private rService:RegisterServiceService)
{
  this.loginForm=this.formBuilder.group(
    {
      email:['',[Validators.required,Validators.pattern(/^[a-z]([A-Za-z0-9_.])+@[a-z]+\.(com|in|org)$/)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$')]]
    }
  );
}
// get formControls(){
//   return this.loginForm.controls;
// }
onSubmit(){
 
  const ee1=this.loginForm.controls['email'].value;
  const ps1=this.loginForm.controls['password'].value;
 this.router.navigate(['/CustomerHomePage']);

 const ee=this.loginForm.controls['email'].value;
 const ps=this.loginForm.controls['password'].value;
  if(this.loginForm.valid){
// if(ee==this.e&& ps==this.pswd)
// {
 
//   console.log("login sucess");
//   this.router.navigate(['/customerHome']);
// }
if(ee==this.e1&& ps==this.pswd1)
{
  
  console.log("login sucess");
  this.router.navigate(['/adminHome']);
}
// else{
//   this.errorMessage='Invalid email or password try again';
// }

//login method
const email = this.loginForm.get('email')?.value;
const password = this.loginForm.get('password')?.value;


console.log(email);
console.log(password);
this.rService.login(email,password).subscribe(
  (response:any)=>{
    if(response.status==="success"){
    console.log('Login Successfull!',response);
    this.successMessage="Login Successfull!";
     this.errorMessage='';//to clear previous error meassage
     this.router.navigate(['/customerHome']);
    }
    // else if (response.status === 'invalid') {
    //   this.loginError = 'Invalid email or password. Please try again.';
    //   this.cdr.detectChanges();
    // }
  },
  (error:any)=>
  {
console.error('Login Failed:',error);
this.errorMessage='Login Failed.Please enter valid credentials';
this.successMessage='';
  }
  );

  }
}}



// function subscribe(arg0: (response: any) => void, arg1: (error: any) => void) {
//   throw new Error('Function not implemented.');
// }

