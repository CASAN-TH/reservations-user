import { SigninPage } from './../pages/signin/signin.page';
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
  date = '12.00';
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public shopService: ShopService,
    public modalController: ModalController,
    private queueService: QueueService,
    private headerColor: HeaderColor,
    public loading: LoadingService
  ) {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let newTime = hours + ':' + minutes;
    console.log(newTime);
    if (this.date > newTime) {
      console.log('มากกว่า')
    } else if (this.date < newTime) {
      console.log('ไม่ถูก')
    }
  }

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
    await this.loading.presentLoadingWithOptions();
    try {
      const res: any = await this.shopService.getShopById(this.requestShoplist);
      // res.data.endtime = new Date(res.data.endtime).setHours(-7, 0, 0, 0);
      // res.data.endtime = new Date(res.data.endtime);
      this.dataDetail = res.data;
      console.log(this.dataDetail);
      await this.loading.dismissOnPageChange()
    } catch (error) {
      await this.loading.dismissOnPageChange()
    }

  }
  back() {
    this.navCtrl.navigateForward('');
  }
  async reserv() {
    if (this.dataToken) {

      this.navCtrl.navigateForward('queue-detail');
    } else {
      const modal = await this.modalController.create({
        component: SigninPage,
        componentProps: { value: 123 }
      });
      await modal.present();
      const data = await modal.onDidDismiss();
      console.log(data);
      if (data) {
        this.ngOnInit();
      }
      // this.navCtrl.navigateForward('signin');

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

