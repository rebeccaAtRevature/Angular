import { Component, OnInit } from '@angular/core';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../empolyee.model';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  constructor(private eAuthService: EAuthService, private employeeService: EmployeeService) { }

  updatedEmployee: Employee = {
    employeeId: this.eAuthService.retrieveUser().employeeId,
    employeeFirstName: this.eAuthService.retrieveUser().employeeFirstName,
    employeeLastName: this.eAuthService.retrieveUser().employeeLastName,
    employeePhoneNumber: this.eAuthService.retrieveUser().employeePhoneNumber,
    employeeAddress: this.eAuthService.retrieveUser().employeeAddress,
    employeePassword: this.eAuthService.retrieveUser().employeePassword,
    employeeImageUrl: this.eAuthService.retrieveUser().employeeImageUrl
  }

  ngOnInit(): void {
  }

  uEmployee(){
    this.employeeService.updateEmployee(this.updatedEmployee).subscribe( response => {
      console.log(response);
      this.updatedEmployee = response;
      this.eAuthService.storeUser(response);
    })
  }

}
