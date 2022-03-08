import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAuthService } from '../m-auth.service';

@Component({
  selector: 'app-mlogout',
  templateUrl: './mlogout.component.html',
  styleUrls: ['./mlogout.component.css']
})
export class MlogoutComponent implements OnInit {

  constructor(private mAuthService: MAuthService, private router: Router) { }

  ngOnInit(): void {

    this.mAuthService.destroyUser();

    this.mAuthService.loggedIn=false;

    this.router.navigate(['loginMain']);
  }

}
