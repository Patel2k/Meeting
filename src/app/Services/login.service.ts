import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLogin } from '../Models/admin/admin.module';
//import { AdminLogin } from '../Models/Admin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl : string = "http://localhost:5299/api/Admin_";
  constructor(private http : HttpClient) { }

   public getAllAdmin() : Observable<AdminLogin[]>{
    return this.http.get<AdminLogin[]>(this.baseUrl);
  }
  public getAdminbyid(id : number) : Observable<AdminLogin>{
    let tempUrl = this.baseUrl + "/" + id;
    return this.http.get<AdminLogin>(tempUrl);
  }
  public addAdmin(emp: AdminLogin) : Observable<AdminLogin>{
    return this.http.post<AdminLogin>(this.baseUrl,emp);
  }
  getuser(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?username=${username}$password=${password}`);
    //                      http://localhost:5299/api/Admin_/getuser?useremail=as&password=afafafa
  }
  login(email: string, password: string):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }
}
