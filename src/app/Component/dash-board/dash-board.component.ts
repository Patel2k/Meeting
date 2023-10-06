import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'src/app/Models/meeting/meeting.module';
import { MeetingServicesService } from 'src/app/Services/meeting-services.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  Meetinglist: Meeting[] = [];
  selectedMeeting: Meeting = {} as Meeting;
  router: any;
  constructor(private myService: MeetingServicesService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.myService.getAllMeeting().subscribe((data: Meeting[]) => {
      this.Meetinglist = data;
      //console.log(data); // Check its adding or not
    })

  }
  onDelete(id: number) {
    debugger;
    this.myService.deleteMeeting(id).subscribe((emp) => {
      alert(id);
      this.router.navigate(["/"]);
    })
  }

}
