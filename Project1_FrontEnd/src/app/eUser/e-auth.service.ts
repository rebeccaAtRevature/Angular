import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';

@Injectable({
  providedIn: 'root'
})
export class EAuthService {

  constructor() { }

  loggedIn: boolean = false;

  employee: Employee = {
    employeeId: 0,
    employeeFirstName: "",
    employeeLastName: "",
    employeePhoneNumber: "",
    employeeAddress: "",
    employeePassword: "",
    employeeImageUrl: ""
  }

  storeUser(employee: Employee): void{
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
  }

  retrieveUser(): Employee{
    let data: any = sessionStorage.getItem("employeeInfo");
    this.employee = JSON.parse(data);
    return this.employee;
  }

  destroyUser(): void{
    sessionStorage.removeItem("employeeInfo");
  }
}
