import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Component/loginpage/loginpage.component';
import { AdminAddComponent } from './Component/admin-add/admin-add.component';
import { EmployeeNewAddComponent } from './Component/employee-new-add/employee-new-add.component';
import { EmployeeloginComponent } from './Component/employeelogin/employeelogin.component';
import { MainPageComponent } from './Component/main-page/main-page.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { BookingComponent } from './Component/booking/booking.component';
import { CalenderAddComponent } from './Component/calender-add/calender-add.component';
import { EditUpdateMeetingComponent } from './Component/edit-update-meeting/edit-update-meeting.component';
import { ViewMeetingComponent } from './Component/view-meeting/view-meeting.component';

const routes: Routes = [
  { path: '', redirectTo: "main", pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'Dashboard', component: DashBoardComponent },
  { path: 'Admin', component: LoginpageComponent },
  { path: 'Admin/Add', component: AdminAddComponent },
  { path: 'Employee', component: EmployeeloginComponent },
  { path: 'Employee/Add', component: EmployeeNewAddComponent },
  { path: 'Booking', component: BookingComponent },
  { path: 'Calender', component: CalenderAddComponent },
  { path: 'edit/:id', component: EditUpdateMeetingComponent },
  { path: 'view/:id', component: ViewMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
