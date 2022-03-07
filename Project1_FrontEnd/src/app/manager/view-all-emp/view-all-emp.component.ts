import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/empolyee.model';


@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})

export class ViewAllEmpComponent implements OnInit {
  
  allEmployees: Employee[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
}
