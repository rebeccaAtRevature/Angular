import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  errorMessage: string = "";

  constructor(private euserService: EUserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
/*     let returnUser: EUser = this.euserService.validateEUser(this.newUser);
    if(returnUser.username == null){
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
