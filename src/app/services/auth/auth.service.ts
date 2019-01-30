import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(
    private http: HttpClient
  ) {
    console.log(environment.apiURL);
  }
  private authorizationHeader() {
    const token = window.localStorage.getItem('http://13.229.103.246@token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  register(body) {
    console.log(body);
    return this.http.post(environment.apiURL + '/api/auth/signup', body).toPromise();
  }

  signin(body) {
    console.log(body);
    return this.http.post(environment.apiURL + '/api/auth/signin', body).toPromise();
  }
  me() {
    return this.http.get(environment.apiURL + '/api/me', { headers: this.authorizationHeader()}).toPromise();
  }











}
