import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.tokenService.getUser();
    if (user && user.roles) {
      const roles = route.data['roles'] as Array<string>;
      if (roles && roles.some(role => user.roles.includes(role))) {
        return true;
      }
      this.router.navigate(['/employes']);
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
