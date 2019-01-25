import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  

  constructor(
    private http: HttpClient
  ) { 
    console.log(environment.apiURL);
  }
  register(body) {
    console.log(body);
      return this.http.post(environment.apiURL + '/api/auth/signup',body).toPromise();
}

  signin(body) {
    console.log(body);
      return this.http.post(environment.apiURL + '/api/auth/signin',body).toPromise();
}


  











}
