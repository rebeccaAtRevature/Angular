import { Component, OnInit } from '@angular/core';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-emp-pr',
  templateUrl: './view-emp-pr.component.html',
  styleUrls: ['./view-emp-pr.component.css']
})
export class ViewEmpPrComponent implements OnInit {

  empPendingReimbursements: Reimbursement[] = [];

  constructor(private employeeService: EmployeeService, private eAuthService: EAuthService) { }

  ngOnInit(): void {
    this.employeeService.viewEmpPendingRequests(this.eAuthService.retrieveUser().employeeId).subscribe( response => {
      console.log(response);
      this.empPendingReimbursements = response;
    })
  }

}
