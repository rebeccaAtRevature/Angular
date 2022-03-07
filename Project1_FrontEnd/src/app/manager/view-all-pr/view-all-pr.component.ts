import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';

@Component({
  selector: 'app-view-all-pr',
  templateUrl: './view-all-pr.component.html',
  styleUrls: ['./view-all-pr.component.css']
})
export class ViewAllPRComponent implements OnInit {

  allPendingReimbursements: Reimbursement[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
