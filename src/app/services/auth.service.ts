import { Injectable } from '@angular/core';
import { Httpclient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // varriables
  authUrl = 'http://local'

  constructor() { }
}
