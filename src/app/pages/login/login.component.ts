import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';


import { User } from 'src/app/user';

import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User()
 hide=true;
 data = false;    
 UserForm!: FormGroup;    
 message!:string;    
 model ={
   email:"",
   password:""
 };    
    
 errorMessage !:string; 
 emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 
 constructor(private router:Router, private registerService:RegisterService) { }

 ngOnInit() {    
  sessionStorage.removeItem('UserName');    
  sessionStorage.clear();    
}    

onSubmit(form:NgForm){
 this.registerService.login(form.value)
 .subscribe((res:any)=>{
    this.registerService.setToken(res['token']);
    this.router.navigateByUrl('/home');
 

 }, err=>{
   this.message="User is not Found!"

 }
 )
}
}
