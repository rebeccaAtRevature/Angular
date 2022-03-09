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

  storeUser(employee: Observable<Employee>): void{
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee));
  }

  retrieveUser(): Employee{
    let data: any = sessionStorage.getItem("employeeInfo");
    this.employee = JSON.parse(data);
    console.log(this.employee.employeeAddress);
    console.log(this.employee.employeeFirstName);
    console.log(this.employee.employeeId);
    console.log(this.employee.employeeImageUrl);
    console.log(this.employee.employeeLastName);
    console.log(this.employee.employeePassword);
    console.log(this.employee.employeePhoneNumber);
    return this.employee;
  }

  destroyUser(): void{
    sessionStorage.removeItem("employeeInfo");
  }
}
