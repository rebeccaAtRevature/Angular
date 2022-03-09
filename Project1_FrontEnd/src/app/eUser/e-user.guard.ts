import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EAuthService } from './e-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EUserGuard implements CanActivate {

  constructor(private authService: EAuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
    if (this.authService.loggedIn){
      return true;
    } else {
      // Route to main login page
      this.router.navigate(['loginMain']);
      return false;
    }
  }
 
  
}
