import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const token = this.tokenService.getToken();
      console.log('Token:', token);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        console.log('Login successful:', data); // Log the response data
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.redirectUser();
      },
      err => {
        console.error('Login failed:', err); // Log the error
        this.errorMessage = 'Login failed: ' + err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  redirectUser(): void {
    if (this.roles.includes('ROLE_RESPONSABLE')) {
      this.router.navigate(['/employes']);
    } else if (this.roles.includes('ROLE_EMPLOYEE')) {
      this.router.navigate(['/dashbord-employee']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
