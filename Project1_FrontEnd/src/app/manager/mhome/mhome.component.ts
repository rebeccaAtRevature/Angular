import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.css']
})
export class MhomeComponent implements OnInit {
  
  toggleNavBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
