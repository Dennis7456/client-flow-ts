import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, tokenKey } from './constants';
// import 'localstorage-polyfill';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // varriables
  // private BASE_URL = 'http://localhost';
  // private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/api/login`, credentials);
  }

  register(credentials: { firstName: string, lastName: string, userName: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/api/register`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem(tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(tokenKey);
  }
}
