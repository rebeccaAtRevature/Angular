import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/manager/manager.model';
import { MAuthService } from '../m-auth.service';
import { MUser } from '../m-user.model';
import { MUserService } from '../m-user.service';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.css']
})
export class MloginComponent implements OnInit {

  newUser: MUser = {
    username: "",
    password: "",
  }

  manager: Manager = {
    managerId: 0,
    managerFirstName: "",
    managerLastName: "",
    managerContact: "",
    managerAddress: "",
    managerPassword: "",
    managerImageUrl: ""
  }

  errorMessage: string = "";

  constructor(private muserService: MUserService, private router: Router, private mAuthService: MAuthService) { }

  ngOnInit(): void {

  }

  validateUser() {

    this.muserService.validateMUser(this.newUser).subscribe(response => {
      this.mAuthService.loggedIn = true;
      console.log(response);

      if (response.managerId == 0) {
        // invalid credentials
        this.errorMessage = "Invalid Credentials!";
      } else {
        // successful login
        this.manager.managerAddress = response.managerAddress;
        this.manager.managerContact = response.managerContact;
        this.manager.managerFirstName = response.managerFirstName;
        this.manager.managerId = response.managerId;
        this.manager.managerImageUrl = response.managerImageUrl;
        this.manager.managerLastName = response.managerLastName;
        this.manager.managerPassword = response.managerPassword;
        this.router.navigate(['mHome']);
        this.errorMessage = "";
        this.mAuthService.loggedIn = true;
        this.mAuthService.storeUser(this.manager);
        console.log("login succesfull!!");
      }
    });
  }
}
