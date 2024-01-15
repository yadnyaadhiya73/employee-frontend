import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {CreateEmployeeComponent} from './create-employee/create-employee.component'
import { FormsModule, Validators } from '@angular/forms';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EmployeeListComponent,RouterModule,CreateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myfirstprj';
}
