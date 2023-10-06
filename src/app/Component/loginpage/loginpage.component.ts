import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/Models/admin/admin.module';
import { of } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  newAdmin : AdminLogin = {} as AdminLogin;
  empList : AdminLogin[] = [];
  constructor(private myService : LoginService, private router : Router) {
  }
  ngOnInit(): void {
    debugger;
    this.myService.getAllAdmin().subscribe((data : AdminLogin[])=>{
      this.empList = data;
      console.log(this.newAdmin);
    })
  }
  login() {
    debugger;
   this.myService.login(this.username, this.password).subscribe((emp:any)=> {
      alert("Welcome to MeetEasy")
      this.newAdmin=emp.data;
      this.router.navigate(['/Dashboard']);
   });
   //routerLink="/Dashboard"
  }

}
  
