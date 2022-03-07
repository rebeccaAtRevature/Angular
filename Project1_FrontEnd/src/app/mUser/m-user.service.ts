import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../manager/manager.model';
import { AuthService } from '../mUser/auth.service';
import { MUser } from './m-user.model';

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  validateMUser(newMUser: MUser): Observable<Manager>{
    console.log(newMUser.username);
    console.log(newMUser.password);
    // Make http get request
    let manager = this.http.get<Manager>(`/api/login/${newMUser.username}/${newMUser.password}`);
    this.authService.storeUser(manager);
    this.authService.loggedIn=true;
    return manager;
  }
}