import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../manager/manager.model';
import { MAuthService } from './m-auth.service';
import { MUser } from './m-user.model';

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  constructor(private http: HttpClient, private mAuthService: MAuthService) { }

  validateMUser(newMUser: MUser): Observable<Manager>{
    console.log(newMUser.username);
    console.log(newMUser.password);
    // Make http get request
    let manager = this.http.get<Manager>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/login/${newMUser.username}/${newMUser.password}`);
    
    
    return manager;
  }
}