import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';

@Component({
  selector: 'app-view-emp-r',
  templateUrl: './view-emp-r.component.html',
  styleUrls: ['./view-emp-r.component.css']
})
export class ViewEmpRComponent implements OnInit {

  allReimbursements: Reimbursement[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
