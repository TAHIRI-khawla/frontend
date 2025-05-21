import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../services/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
  content?: string;
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
