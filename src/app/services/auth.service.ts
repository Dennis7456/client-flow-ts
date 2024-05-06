import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // varriables
  private BASE_URL = 'http://localhost';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/api/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }
}
