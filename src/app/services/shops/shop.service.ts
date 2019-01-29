import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('http://13.229.103.246@token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getShop() {
    return this.http.get(environment.apiURL + './api/shoplist').toPromise()
  }
  getShopById(_id) {
    return this.http.get(environment.apiURL + './api/shops/' + _id , { headers: this.authorizationHeader() }).toPromise()
  }
}

