import { Component } from '@angular/core';
import {User} from "../services/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {
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
