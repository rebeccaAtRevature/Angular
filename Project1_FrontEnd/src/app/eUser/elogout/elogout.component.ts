import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EAuthService } from '../e-auth.service';

@Component({
  selector: 'app-elogout',
  templateUrl: './elogout.component.html',
  styleUrls: ['./elogout.component.css']
})
export class ElogoutComponent implements OnInit {

  constructor(private eAuthService: EAuthService, private router: Router) { }

  ngOnInit(): void {

    this.eAuthService.destroyUser();

    this.eAuthService.loggedIn=false;

    this.router.navigate(['loginMain']);
  }

}
