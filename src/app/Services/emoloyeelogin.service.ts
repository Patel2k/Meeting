import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee/employee.module';
//import { AdminLogin } from '../Models/Admin';


@Injectable({
  providedIn: 'root'
})
export class EmoloyeeloginService {
  constructor(private http : HttpClient) { }
  baseUrl : string = "http://localhost:5299/api/Employee_";

   public getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }
  public getEmployeebyid(id : number) : Observable<Employee>{
    let tempUrl = this.baseUrl + "/" + id;
    return this.http.get<Employee>(tempUrl);
  }
  public addEmployee(emp: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,emp);
  }
  getuser(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?username=${username}$password=${password}`)
    //                      http://localhost:5299/api/Admin_/getuser?useremail=as&password=afafafa
  }
  

  // public getMyBlog(username, password): Observable<any> {
  //   const body = { username, password };
  //   return this.http.post('...apiurl...', body);
  // }
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
