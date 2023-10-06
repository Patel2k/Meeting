import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../Models/meeting/meeting.module';

@Injectable({
  providedIn: 'root'
})
export class MeetingServicesService {
  private baseUrl="http://localhost:5299/api/Meeting";
  constructor(private http: HttpClient) { }

  public getAllMeeting():Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.baseUrl);
  }
  public getMeetingById(id:number):Observable<Meeting>{
    let tempUrl=this.baseUrl+"/"+id;
    return this.http.get<Meeting>(tempUrl);
  }
  public addMeeting(emp: Meeting) : Observable<Meeting>{
    return this.http.post<Meeting>(this.baseUrl,emp);
  }
  public updateMeeting(meet:Meeting) : Observable<Meeting>{
    let tempUrl = this.baseUrl + "/" + meet.meetingId;
    return this.http.put<Meeting>(tempUrl, meet); 
  }
  public deleteMeeting(id:number) : Observable<string> {
    let tempUrl=this.baseUrl+"/"+id;
    return this.http.delete<string>(tempUrl);
  }
}
