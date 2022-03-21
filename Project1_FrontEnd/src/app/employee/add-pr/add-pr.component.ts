import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.css']
})
export class AddPrComponent implements OnInit {

  constructor(private eAuthService: EAuthService, private employeeService: EmployeeService, private router: Router) { }

  newReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: this.eAuthService.retrieveUser().employeeId,
    reimbursementAmount: 0,
    reimbursementPending: true
  }
  

  ngOnInit(): void {
    console.log(this.eAuthService.retrieveUser().employeeId);
    console.log(this.eAuthService.retrieveUser().employeePassword);
  }

  addReimbursement(): void {
    this.employeeService.submitRequest(this.newReimbursement).subscribe( response => {
      console.log(response);
      this.newReimbursement.reimbursementId = response.reimbursementId;
      this.newReimbursement.requestingEmployeeId = response.requestingEmployeeId;
      this.newReimbursement.reimbursementAmount = response.reimbursementAmount;
      this.newReimbursement.dateOfRequest = response.dateOfRequest;
      this.router.navigate(['/eHome']);
    });
  }

}
