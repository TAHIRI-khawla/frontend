import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user'; // Assure-toi que le modèle User est bien défini

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8084/api/auth/';
  private tokenKey = 'auth-token';
  private userKey = 'currentUser';

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    const userJson = localStorage.getItem(this.userKey);
    this.currentUserSubject = new BehaviorSubject<User | null>(
      userJson ? JSON.parse(userJson) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Récupérer l'utilisateur courant
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Récupérer l'ID de l'utilisateur courant
  public getCurrentUserId(): number {
    return this.currentUserValue?.id || 0;
  }

  // Authentification
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };
    return this.http.post(this.authUrl + 'signin', body, { headers });
  }

  // Enregistrer un nouvel utilisateur
  register(username: string, email: string, password: string, role: string[]): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, email, password, role };
    return this.http.post(this.authUrl + 'signup', body, { headers });
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
  }

  // Sauvegarde du token
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Récupération du token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Sauvegarde de l'utilisateur connecté
  saveUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // Vérifie si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
