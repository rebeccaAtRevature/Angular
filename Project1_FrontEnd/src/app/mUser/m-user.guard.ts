import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MAuthService } from './m-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MUserGuard implements CanActivate {

  constructor(private authService: MAuthService, private router: Router) { }

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
