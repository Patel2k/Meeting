import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/Models/admin/admin.module';

//import { AdminLogin } from 'src/app/Models/Admin';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  newAdmin : AdminLogin = {} as AdminLogin;
  admform: FormGroup = new FormGroup({
    //adminId: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)]),
    adminName: new FormControl("", [Validators.required]),
    adminEmail: new FormControl("", [Validators.required]),
    adminPassword: new FormControl(0, [Validators.required]),
    adminPhone: new FormControl("", [Validators.required]) //Formcontrol(intialvalue,validators)
  });
  //router: any;
  get adminId() {
    return this.admform.get("adminId");
  }
  get adminName() {
    return this.admform.get("adminName");
  }
  get adminEmail() {
    return this.admform.get("adminEmail");
  }
  get adminPassword() {
    return this.admform.get("adminPassword");
  }
  get adminPhone() {
    return this.admform.get("adminPhone");
  }
  constructor(private myService : LoginService, private router : Router) {
  }
  OnNewAdmin(){
    debugger;
    this.myService.addAdmin(this.newAdmin).subscribe((emp : any) => {
      alert("Admin added successfully");
      this.router.navigate(['/']);
    });
  }
}
  