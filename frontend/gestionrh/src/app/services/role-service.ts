import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Role} from "../models/role";

@Injectable({ providedIn: 'root' })
export class RoleService {
  private apiUrl = 'http://localhost:8084/api/roles';

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }
}
