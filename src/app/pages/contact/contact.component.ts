import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public quriesform!: FormGroup;  
  message!:string;
  constructor(private formbulider:FormBuilder,private registerService:RegisterService) { }
  ngOnInit() {    
    this.quriesform = this.formbulider.group({    
      firstname: ['', [Validators.required]], 
      lastname: ['', [Validators.required]],   
      email: ['', [Validators.required]],      
      phone: ['', [Validators.required]],    
      quries: ['', [Validators.required]]   
     
    });    
  }   
  onSubmitQuries(){
    console.log(this.quriesform.value);
    this.registerService.postComment(this.quriesform.value)
    .subscribe(res=>{
      console.log(res);
      this.quriesform.reset();
      this.message="Your Quries have Submitted Successfuly!";
    },err=>{
      this.message="Your Quries is not Submitted !"
    });
  }  
}
