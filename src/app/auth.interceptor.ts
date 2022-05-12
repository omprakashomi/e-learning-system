import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { RegisterService } from "./pages/register.service";

@Injectable(
    {providedIn:'root'}
)
export class AuthInterCeptor implements HttpInterceptor{
    constructor(private registerService:RegisterService,
        private router:Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler){
       if(req.headers.get('noauth')){
           return next.handle(req.clone());
       }
       else{
           const clonedreq= req.clone({
               headers:req.headers.set('Authorization','Bearer '+this.registerService.getToken())
           });
        return next.handle(clonedreq).pipe(
            tap(
                 event=>{},
                 err=>{
                     if(err.error.auth==false){
                         this.router.navigateByUrl('/login');
                     }
                 }
            )
        )
       }
    }
}


