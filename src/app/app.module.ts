import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './Component/loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddComponent } from './Component/admin-add/admin-add.component';
import { EmployeeloginComponent } from './Component/employeelogin/employeelogin.component';
import { EmployeeNewAddComponent } from './Component/employee-new-add/employee-new-add.component';
import { MainPageComponent } from './Component/main-page/main-page.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { BookingComponent } from './Component/booking/booking.component';
import { EditUpdateMeetingComponent } from './Component/edit-update-meeting/edit-update-meeting.component';
import { ViewMeetingComponent } from './Component/view-meeting/view-meeting.component';
import { CalenderAddComponent } from './Component/calender-add/calender-add.component';
//import { NgOtpInputComponent } from 'ng-otp-input';
//import { NgOtpInputComponent } from 'ng-otp-input';
//import { NgOtpInputComponent } from 'ng-otp-input/public_api';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    AdminAddComponent,
    EmployeeloginComponent,
    EmployeeNewAddComponent,
    MainPageComponent,
    DashBoardComponent,
    NavBarComponent,
    BookingComponent,
    EditUpdateMeetingComponent,
    ViewMeetingComponent,
    CalenderAddComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //NgOtpInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
