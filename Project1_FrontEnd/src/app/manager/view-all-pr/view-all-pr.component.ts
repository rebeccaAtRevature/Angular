import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-all-pr',
  templateUrl: './view-all-pr.component.html',
  styleUrls: ['./view-all-pr.component.css']
})
export class ViewAllPRComponent implements OnInit {

  allPendingReimbursements: Reimbursement[] = [];

  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    this.managerService.viewAllPendingRequests().subscribe( response => {
      console.log(response);
      this.allPendingReimbursements = response;
    });
  }

}
