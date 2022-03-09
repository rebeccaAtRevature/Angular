import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';

@Injectable({
  providedIn: 'root'
})
export class EAuthService {

  constructor() { }

  loggedIn: boolean = false;

  storeUser(employee: Observable<Employee>): void{
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
  }

  retrieveUser(): Employee{
    let data: any = sessionStorage.getItem("employeeInfo");
    return JSON.parse(data);
  }

  destroyUser(): void{
    sessionStorage.removeItem("employeeInfo");
  }
}
