import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';
import { Reimbursement } from '../reimbursement/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  readPendingRequest(reimbursementId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(`http://localhost:4040/api/p-reim/${reimbursementId}`);
  }
  approveOrDeny(reimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(`http://localhost:4040/api/p-reim/${reimbursement}`);
  }
  viewAllPendingRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4040/api/all-p-reims`);
  }
  viewAllResolvedRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4040/api/all-r-reims`);
  }
  viewAllRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4040/api/all-reims/${employeeId}`);
  }
  viewAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`http://localhost:4040/api/employees`);
  }

}
