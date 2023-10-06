import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee.module';
import { EmoloyeeloginService } from 'src/app/Services/emoloyeelogin.service';
//import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
 newEmployee = {} as Employee;
 empList : Employee[] = [];
  constructor(private myService : EmoloyeeloginService, private router : Router) {
  }
  ngOnInit(): void {
    debugger;
    this.myService.getAllEmployee().subscribe((data : Employee[])=>{
      this.empList = data;
      console.log(this.newEmployee);
    })
  }
  login() {
    debugger;
    this.myService.getuser(this.username, this.password).subscribe((emp:any) => {
      alert("Welcome to Meeting managment");
    });
    }

  }
