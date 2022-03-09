import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';
import { EAuthService } from './e-auth.service';
import { EUser } from './e-user.model';

@Injectable({
  providedIn: 'root'
})
export class EUserService {

  constructor(private http: HttpClient, private eAuthService: EAuthService) { }

  async validateEUser(newEUser: EUser): Promise<Observable<Employee>>{
    console.log(newEUser.username);
    console.log(newEUser.password);
    // Make http get request
    let employee = this.http.get<Employee>(`http://localhost:4040/api/e-log/${newEUser.username}/${newEUser.password}`);
    this.eAuthService.storeUser(employee);
    return employee;
  }
}
