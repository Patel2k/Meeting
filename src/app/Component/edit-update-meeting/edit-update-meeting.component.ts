import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Meeting } from 'src/app/Models/meeting/meeting.module';
import { MeetingServicesService } from 'src/app/Services/meeting-services.service';

@Component({
  selector: 'app-edit-update-meeting',
  templateUrl: './edit-update-meeting.component.html',
  styleUrls: ['./edit-update-meeting.component.css']
})
export class EditUpdateMeetingComponent {
  updateMeeting: Meeting = {} as Meeting;
  id: number | null = 0;
  //router:any;
  constructor(private myService: MeetingServicesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    //alert(this.selectedMeeting)
    debugger;
    this.activatedRoute.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parseInt(parameters.get("id")!);
      this.myService.getMeetingById(this.id).subscribe((data: Meeting) => {
        this.updateMeeting = data;
      })
    })
  }

  onSubmit() {
    debugger;
    this.myService.updateMeeting(this.updateMeeting).subscribe((emp) => {
      alert(this.updateMeeting.meetingDetails);
      this.router.navigate(["/"]);
    })
  }
}
