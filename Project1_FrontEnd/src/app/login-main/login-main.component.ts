import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  toggleLogin: boolean = true;

  toggleMainLogin(){
    if(this.toggleLogin){
      this.toggleLogin = false;
    }else{
      this.toggleLogin = true;
    }
  }
  constructor() { }

  ngOnInit(): void {

}

}
