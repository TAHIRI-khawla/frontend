import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8085/api/conges';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (!token) {
      this.handleUnauthorized();
      throw new Error('No token available');
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private handleUnauthorized(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  demanderConge(congeData: any, employeId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    const params = new HttpParams().set('employeId', employeId.toString());

    return this.http.post(
      `${this.apiUrl}/demander`,
      congeData,
      { headers, params }
    ).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.handleUnauthorized();
        }
        return throwError(() => error);
      })
    );
  }
}
