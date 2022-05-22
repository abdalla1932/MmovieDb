import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  error:string ="";
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  registerForm:FormGroup = new FormGroup({

    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required,Validators.min(12),Validators.max(70)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(8)])

  })

  submitForm(registerForm:FormGroup)
  {
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if (response.message==="success") {
        this._Router.navigate(["/login"])
      }
      else{
         this.error= response.message
      }
    })
    
  }

  
}
