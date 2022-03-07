import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/empolyee.model';
import { ManagerService } from '../manager.service';


@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})

export class ViewAllEmpComponent implements OnInit {
  
  allEmployees: Employee[] = [];
  
  constructor(private managerService: ManagerService, private router: Router) { }
  
  ngOnInit(): void {
    // This returns an observable, must subscribe to the observable
    this.managerService.viewAllEmployees().subscribe( response => {
      console.log(response);
      this.allEmployees = response;
    });
    
  }
  
}
