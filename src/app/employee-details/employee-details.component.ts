import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  id:number;
  employee:Employee;
  constructor(private route:ActivatedRoute,private empService:EmployeeService){}
   
  ngOnInit(): void {
   
  this.id=this.route.snapshot.params['id'];
  this.employee=new Employee();

  this.empService.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
  })

  }
}
