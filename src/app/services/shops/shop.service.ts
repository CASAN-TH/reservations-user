import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public http:HttpClient) { }

  getShop(){
    return this.http.get(environment.apiURL + './api/shoplist').toPromise()
  }
  getShopById(id){
    return this.http.post(environment.apiURL + './api/shops',id).toPromise()
  }
}

 