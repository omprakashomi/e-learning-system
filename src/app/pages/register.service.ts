import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {from, Observable } from 'rxjs';
import { User } from '../user';
import { Quries } from '../userQuries';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
 noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};
 
  constructor(private http : HttpClient) {  } 
  
    
  postUser(user:User):Observable<object>{
   
    return this.http.post('http://localhost:3000/api'+'/register',user,this.noAuthHeader);
    
  }
  postComment(quries:Quries):Observable<object>{
    return this.http.post('http://localhost:3000/api'+'/comment',quries,this.noAuthHeader);
  }

  login(authCredentials:any){
    return this.http.post('http://localhost:3000/api'+'/authenticate',authCredentials,this.noAuthHeader)
  }

  getUserData(){
    return this.http.get('http://localhost:3000/api'+'/userProfile');
  }


//helper

  setToken(token:string){
     localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
  }
  getUserPayload(){
    var token=this.getToken();
    if(token){
      var userPayload= atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }

  }
 isLoggedIn(){
   var userPayload=this.getUserPayload();
   if(userPayload){
     return userPayload.exp >Date.now()/1000;
   }
   else{
     return false;
   }
 }
  
 
  
}
