import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-all-rr',
  templateUrl: './view-all-rr.component.html',
  styleUrls: ['./view-all-rr.component.css']
})
export class ViewAllRRComponent implements OnInit {

  allResolvedReimbursements: Reimbursement[] = [];

  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    this.managerService.viewAllResolvedRequests().subscribe(response => {
      console.log(response);
      this.allResolvedReimbursements = response;
    });
  }

}
