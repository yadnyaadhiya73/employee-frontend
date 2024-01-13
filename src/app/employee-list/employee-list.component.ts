import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];

  constructor(private empService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.empService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id:number){
  this.empService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployees();
  })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details',id])
  }
}
