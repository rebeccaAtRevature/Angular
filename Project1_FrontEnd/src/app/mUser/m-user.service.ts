import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../mUser/auth.service';
import { MUser } from './m-user.model';

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  validateMUser(newMUser: MUser): MUser{
    // Perform logic to check if credentials are correct
    // Make http get request
    this.http.get(`/api/login/${newMUser.username}/${newMUser.password}`);
    this.authService.storeUser(newMUser);
    this.authService.loggedIn=true;
    return newMUser;
  }
}