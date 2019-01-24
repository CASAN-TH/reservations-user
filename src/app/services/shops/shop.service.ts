import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public http:HttpClient) { }

  getShop(){
    return this.http.get('./assets/json/shop-list.json').toPromise()
  }
}
