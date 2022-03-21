import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement/reimbursement.model';
import { Employee } from './empolyee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  submitRequest(reimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.post<Reimbursement>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/p-reims`, reimbursement);
  }
  viewEmpPendingRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/p-reims/${employeeId}`);
  }
  viewEmpResolvedRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/r-reims/${employeeId}`);
  }
  viewEmployee(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/employee/${employeeId}`);
  }
  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`http://ec2-54-234-179-56.compute-1.amazonaws.com:9999/api/employees`, employee);
  }
}
