import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:9191/employee/v1";

  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`+`/getAllEmp`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+`/add`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}`+`/get/`+id);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`+`/update/`+id,employee);
  }

  deleteEmployee(id:number):Observable<String>{
    return this.httpClient.delete<String>(`${this.baseUrl}`+`/delete/`+id);
  }
}
