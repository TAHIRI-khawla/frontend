import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "./user";

const API_URL = 'http://localhost:8084/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getProfDashboard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }



  getAdminDashboard(): Observable<any> {
    return this.http.get(API_URL + 'responsable', { responseType: 'text' });
  }
  /*
  getAllUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth-token')
      })
    };
    return this.http.get<User[]>(API_URL + 'users', httpOptions);
  }
  */
}
