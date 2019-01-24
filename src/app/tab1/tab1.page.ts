import { Component } from '@angular/core';
import { ShopService } from '../services/shops/shop.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  shopdata:any;
  constructor(public shoplist:ShopService){

  }
  ngOnInit(){
    this.getShoplist();
  }

 async getShoplist(){
    this.shopdata = await this.shoplist.getShop();
    console.log(this.shopdata)
  }
}
