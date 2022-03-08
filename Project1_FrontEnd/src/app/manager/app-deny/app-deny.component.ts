import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-app-deny',
  templateUrl: './app-deny.component.html',
  styleUrls: ['./app-deny.component.css']
})
export class AppDenyComponent implements OnInit {

  pendingReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    requestApproved: false,
  }
  resolvedReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    requestApproved: false,
  }

  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  makeCall(){
    this.managerService.approveOrDeny(this.pendingReimbursement)
  }

  getRequest(pendingReimbursement: Reimbursement): void{
     this.managerService.approveOrDeny(pendingReimbursement).subscribe( response => {
      console.log(response);
      this.resolvedReimbursement = response;
  });
  }

 
}
