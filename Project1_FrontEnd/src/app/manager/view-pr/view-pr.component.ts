import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-pr',
  templateUrl: './view-pr.component.html',
  styleUrls: ['./view-pr.component.css']
})
export class ViewPrComponent implements OnInit {

  pendingReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    dateOfRequest: ""
  }
  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    this.managerService.readPendingRequest(this.pendingReimbursement.reimbursementId).subscribe( response => {
      console.log(response);
      this.pendingReimbursement = response;
    });
  }
  
}
