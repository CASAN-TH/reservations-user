import { LoadingService } from './../services/loading/loading.service';
import { Component } from '@angular/core';
import { ShopService } from '../services/shops/shop.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  shopdata: any;
  constructor(
    public shoplist: ShopService,
    public loading: LoadingService
  ) {

  }
  ngOnInit() {
    this.getShoplist();
  }

  async getShoplist() {
    this.loading.presentLoadingWithOptions();
    try {
      this.shopdata = await this.shoplist.getShop();
      console.log(this.shopdata)
      this.loading.dismissOnPageChange();
    } catch (error) {
      this.loading.dismissOnPageChange();
    }


  }
}
