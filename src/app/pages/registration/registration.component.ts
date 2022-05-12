import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide=true;
  data = false;    
 public userform !: FormGroup;    
  message!:string;  

  emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private formbulider:FormBuilder,private registerService:RegisterService,
    private router:Router) { }

  
  
    
  ngOnInit() {    
    this.userform = this.formbulider.group({    
      name: ['', [Validators.required]],    
      email: ['', [Validators.required]],    
      dob: ['', [Validators.required]],    
      phone: ['', [Validators.required]],    
      password: ['', [Validators.required]]   
     
    });    
  }   
  onSubmit(){
    console.log(this.userform.value);
    this.registerService.postUser(this.userform.value)
    .subscribe(res=>{
      console.log(res);
      this.userform.reset();
      this.router.navigate(['']);
    },err=>{
       this.message="Something is Error! Please Check this!!"
    });
    
    
  }
      
}
