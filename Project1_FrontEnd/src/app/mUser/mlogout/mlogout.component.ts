import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mlogout',
  templateUrl: './mlogout.component.html',
  styleUrls: ['./mlogout.component.css']
})
export class MlogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.destroyUser();

    this.authService.loggedIn=false;

    this.router.navigate(['loginMain']);
  }

}
