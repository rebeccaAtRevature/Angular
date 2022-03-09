import { Component, OnInit } from '@angular/core';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { Employee } from '../empolyee.model';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {



  constructor(private eAuthService: EAuthService) { }

  employee: Employee = {
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

}
