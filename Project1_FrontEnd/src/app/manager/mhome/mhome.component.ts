import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.css']
})
export class MhomeComponent implements OnInit {
  
  toggleVAE: boolean = false;
  toggleViewAllEmployees(){
    if(this.toggleVAE){
      this.toggleVAE = false;
    }else{
      this.toggleVAE = true;
    }
  }

  toggleVARR: boolean = false;
  toggleViewAllResolvedReimbursements(){
    if(this.toggleVARR){
      this.toggleVARR = false;
    }else{
      this.toggleVARR = true;
    }
  }
    
  toggleVAPR: boolean = false;
  toggleViewAllPendingReimbursements(){
    if(this.toggleVAPR){
      this.toggleVAPR = false;
    }else{
      this.toggleVAPR = true;
    }
  }

  toggleVER: boolean = false;
  toggleViewEmployeeReimbursements(){
    if(this.toggleVER){
      this.toggleVER = false;
    }else{
      this.toggleVER = true;
    }
  }

  toggleVPR: boolean = false;
  toggleViewPendingReimbursement(){
    if(this.toggleVPR){
      this.toggleVPR = false;
    }else{
      this.toggleVPR = true;
    }
  }

  toggleAD: boolean = false;

  toggleApproveOrDeny(){
    if(this.toggleAD){
      this.toggleAD = false;
    }else{
      this.toggleAD = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
