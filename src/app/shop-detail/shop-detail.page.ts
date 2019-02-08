import { LoadingService } from './../services/loading/loading.service';
import { QueueService } from './../services/queue/queue.service';

import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../services/shops/shop.service';
import { ModalOpenimagePage } from '../modals/modal-openimage/modal-openimage.page';
import { HeaderColor } from '@ionic-native/header-color/ngx';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  [x: string]: any;
  dataDetail: any;
  dataToken: any;
  requestShoplist: string;
  authService: any;
  queueData: any;
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public shopService: ShopService,
    public modalController: ModalController,
    private queueService: QueueService,
    private headerColor: HeaderColor,
    public loading: LoadingService
  ) { }

  async ngOnInit() {
    this.headerColor.tint('#becb29');
    let dataToken = window.localStorage.getItem(environment.apiURL + '@token');
    this.dataToken = dataToken;
    console.log(dataToken);

    this.requestShoplist = this.route.snapshot.paramMap.get('_id');
    console.log(this.requestShoplist);

    const _id = {
      shopid: this.requestShoplist
    };
    // console.log(_id);
    this.getDetail();
    this.getQueue();

  }
  async getDetail() {
    this.loading.presentLoadingWithOptions();
    try {
      const res: any = await this.shopService.getShopById(this.requestShoplist);
      this.dataDetail = res.data;
      console.log(this.dataDetail);
      this.loading.dismissOnPageChange()
    } catch (error) {
      this.loading.dismissOnPageChange()
    }

  }
  back() {
    this.navCtrl.navigateForward('');
  }
  reserv() {
    if (this.dataToken) {

      this.navCtrl.navigateForward('queue-detail');
    } else {
      this.navCtrl.navigateForward('signin');

    }

  }
  async getQueue() {
    try {
      let dataShop = {
        _id: this.requestShoplist
      }
      let res: any = await this.queueService.getQueue(dataShop);
      // console.log(res);
      this.queueData = res.data.queuewait;
    } catch (error) {

    }

  }
  async openImageIndex(i) {
    // console.log(i);
    let modal = await this.modalController.create({
      component: ModalOpenimagePage,
      componentProps: {
        image: i
      }
    });
    return await modal.present();
  }
}

