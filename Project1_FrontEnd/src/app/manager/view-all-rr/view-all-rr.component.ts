import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';

@Component({
  selector: 'app-view-all-rr',
  templateUrl: './view-all-rr.component.html',
  styleUrls: ['./view-all-rr.component.css']
})
export class ViewAllRRComponent implements OnInit {

  allResolvedReimbursements: Reimbursement[] = [{
    reimbusermentId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    dateOfRequest: ""
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
