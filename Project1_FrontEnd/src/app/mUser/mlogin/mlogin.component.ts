import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  errorMessage: string = "";

  constructor(private muserService: MUserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
    let returnUser: MUser = this.muserService.validateMUser(this.newUser);
 /*   if(returnUser.username == null){
      // invalid credentials
      this.errorMessage = "Invalid Credentials!!";
    }else{
      // successful login
      if(returnUser.role == "admin"){
        //navigate to book-crud
        this.router.navigate(['book-crud']);
      }else{
        //navigate to display component
        this.router.navigate(['display']);
      }
      console.log("login succesfull!!");
    } */
  }
}
