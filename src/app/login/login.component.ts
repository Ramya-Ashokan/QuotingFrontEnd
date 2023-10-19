import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../Services/Registerservice.service';
import { Customer } from '../modules/Customer';
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
currentUser:any;
userName:any;
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
 
//   const ee1=this.loginForm.controls['email'].value;
//   const ps1=this.loginForm.controls['password'].value;
//  this.router.navigate(['/CustomerHomePage']);

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
else{
  this.errorMessage='Invalid email or password try again';
}

//login method
const email = this.loginForm.get('email')?.value;
const password = this.loginForm.get('password')?.value;


console.log(email);
console.log(password);
this.rService.login(email,password).subscribe(
  (response:any)=>{
    
      localStorage.setItem('currentUser', JSON.stringify(response));//object
      localStorage.setItem('userName',JSON.stringify(response.user.userName));//object attribute
      localStorage.setItem('email',JSON.stringify(response.user.email));
     localStorage.setItem('registerState',JSON.stringify(response.user.inputStates));
     
      const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const userName=JSON.parse(localStorage.getItem('userName')+'');
      const email=JSON.parse(localStorage.getItem('email')+'');
      const registerState=JSON.parse(localStorage.getItem('registerState')+'');
      console.log("local storage",storedUser);
      console.log("UserName",userName);
      console.log("email",email);
      console.log("register states",registerState);
      

    this.successMessage="Login Successfull!";
     this.errorMessage='';//to clear previous error meassage
     this.router.navigate(['/customerHome']);
    
    // else if (response.status === 'invalid') {
    //   this.loginError = 'Invalid email or password. Please try again.';
    //   this.cdr.detectChanges();
    // }
  },
  (error:any)=>
  {
console.error('Login Failed:',error);
this.errorMessage='Login Failed.Password Mismatch';
this.successMessage='';
  }
  );

  }
}

// Convert the object to a JSON string and store it in local storage

}



// function subscribe(arg0: (response: any) => void, arg1: (error: any) => void) {
//   throw new Error('Function not implemented.');
// }

