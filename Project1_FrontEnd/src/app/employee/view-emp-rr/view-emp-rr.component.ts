import { Component, OnInit } from '@angular/core';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-emp-rr',
  templateUrl: './view-emp-rr.component.html',
  styleUrls: ['./view-emp-rr.component.css']
})
export class ViewEmpRrComponent implements OnInit {

  empResolvedReimbursements: Reimbursement[] = [];

  constructor(private employeeService: EmployeeService, private eAuthService: EAuthService) { }

  ngOnInit(): void {
    this.employeeService.viewEmpResolvedRequests(this.eAuthService.retrieveUser().employeeId).subscribe( response => {
      console.log(response);
      this.empResolvedReimbursements = response;
    })
  }

}
