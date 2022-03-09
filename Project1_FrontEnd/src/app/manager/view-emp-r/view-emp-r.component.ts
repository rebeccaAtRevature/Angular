import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-emp-r',
  templateUrl: './view-emp-r.component.html',
  styleUrls: ['./view-emp-r.component.css']
})
export class ViewEmpRComponent implements OnInit {

  allReimbursements: Reimbursement[] = [];

  employeeId: number = 100;
  
  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    this.managerService.viewAllRequests(this.employeeId).subscribe( response => {
      console.log(response);
      this.allReimbursements = response;
    });
  }
  refresh(): void {
      this.managerService.viewAllRequests(this.employeeId).subscribe( response => {
      console.log(response);
      this.allReimbursements = response;
    });
  }
}
