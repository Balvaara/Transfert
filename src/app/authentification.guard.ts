import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ConnexionService } from './serices/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private router:Router ,private ath:ConnexionService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      const currentuser=this.ath.currentUserValue;
      if (currentuser) {
        return true;
      }
      this.router.navigate(['/'],{
        queryParams:{
          returnUrl:state.url
        }
      })
      return false;


    }
  
}
