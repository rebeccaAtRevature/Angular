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
    reimbursementId: 10,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    dateOfRequest: ""
  }
  errorMessage: string = "";
  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    
  }
  makeCall(){
    this.getRequest(this.pendingReimbursement.reimbursementId);
  }
  getRequest (reimbursementId: number): void{
      this.managerService.readPendingRequest(reimbursementId).subscribe( response => {
      console.log(response);
      this.pendingReimbursement.reimbursementId = response.reimbursementId;
      this.pendingReimbursement.requestingEmployeeId = response.requestingEmployeeId;
      this.pendingReimbursement.reimbursementAmount = response.reimbursementAmount;
      this.pendingReimbursement.dateOfRequest = response.dateOfRequest;
    });
    
    if( this.pendingReimbursement.requestingEmployeeId == 0 ){
      // invalid credentials
      console.log("entered If clause");
      this.errorMessage = "Must be valid reimbursement ID";
    } else {
      // successful login
      this.router.navigate(['mHome']);
      this.errorMessage = "";
      
      console.log("readPendingRequest() was succesfull!");
    } 
  }
}
