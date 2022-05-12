import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCartService } from 'src/app/service/course-cart.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private registerService:RegisterService) { }
  userDetails:any;
  ngOnInit(): void {
  this.registerService.getUserData()
  .subscribe(
    (res:any)=>{
      this.userDetails=res['user'];
    },
    err=>{

    }
  );
  }

  onLogout(){
    this.registerService.deleteToken();
    this.router.navigateByUrl('/login');
  }
 
  userShow:boolean=false;
  account(){
    if(!this.userShow){
      this.userShow=true;
    }
    else{
      this.userShow=false;
    }
    
  }
  


}
