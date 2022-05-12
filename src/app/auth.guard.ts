import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './pages/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private registerService:RegisterService,
    private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(!this.registerService.isLoggedIn()){
       this.router.navigateByUrl('/login');
       this.registerService.deleteToken();
       return false;
      }
    
    return true;
  }
  
}
