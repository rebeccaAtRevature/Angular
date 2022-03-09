import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/empolyee.model';
import { EAuthService } from '../e-auth.service';
import { EUser } from '../e-user.model';
import { EUserService } from '../e-user.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent implements OnInit {
  
  newUser: EUser = {
    username: "",
    password: "",
  }

  employee: Employee = {
    employeeId: 0,
    employeeFirstName: "",
    employeeLastName: "",
    employeeContact: "",
    employeeAddress: "",
    employeePassword: "",
    employeeImageUrl: ""
  }

  errorMessage: string = "";

  constructor(private euserService: EUserService, private router: Router, private eAuthService: EAuthService) { }

  ngOnInit(): void {
  }

  validateUser(){

    this.euserService.validateMUser(this.newUser).subscribe( response => {
      console.log(response);
      this.employee.employeeAddress = response.employeeAddress;
      this.employee.employeeContact = response.employeeContact;
      this.employee.employeeFirstName = response.employeeFirstName;
      this.employee.employeeId = response.employeeId;
      this.employee.employeeImageUrl = response.employeeImageUrl;
      this.employee.employeeLastName = response.employeeLastName;
      this.employee.employeePassword = response.employeePassword;
    })

    if(this.employee.employeeId == 0){
      // invalid credentials
      this.errorMessage = "Invalid Credentials!!";
      this.eAuthService.loggedIn = true;
    }else{
      // successful login
  
        //navigate to book-crud
        this.router.navigate(['eHome']);
        this.errorMessage = "";
        console.log("login succesfull!");
    } 
  }
}
