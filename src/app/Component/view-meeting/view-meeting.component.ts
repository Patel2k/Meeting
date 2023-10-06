import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meeting } from 'src/app/Models/meeting/meeting.module';
import { MeetingServicesService } from 'src/app/Services/meeting-services.service';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent {
  id:number | null=0;
  selectedMeeting : Meeting= {} as Meeting;
  constructor(private myService:MeetingServicesService,private activatedRoute:ActivatedRoute){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.myService.getMeetingById(this.id).subscribe((data:Meeting)=>{
        this.selectedMeeting=data;
      })
    })
}
}
