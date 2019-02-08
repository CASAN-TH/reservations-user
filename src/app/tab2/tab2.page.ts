import { Component } from '@angular/core';
import { QueueService } from '../services/queue/queue.service';
import { environment } from 'src/environments/environment.prod';
import { ModalController } from '@ionic/angular';
import { ModalDetailPage } from '../modals/modal-detail/modal-detail.page';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  delay: Boolean = true;

  user_id: any;
  token: any;
  queuehistory: any;
  queuehistorytrue: any;
  constructor(
    public queue: QueueService,
    public modalController: ModalController) {

  }

  ionViewWillEnter() {
    this.token = window.localStorage.getItem(environment.apiURL + '@token');
    console.log(this.token)
    this.user_id = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'))
    this.getQueueHisTrue();
  }

  ngOnInit() {
    this.user_id = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'))
    // this.getQueueHis();
    this.getQueueHisTrue();

  }

  segmentChanged(ev: any) {
    console.log(ev)
    if (ev.detail.value == 'getQueueHis') {
      console.log(ev)
      this.queuehistory = [];
      this.queuehistorytrue = [];

      this.getQueueHis();
    } else if (ev.detail.value == 'getQueueHisTrue') {
      console.log(ev)
      this.queuehistory = [];

      this.queuehistorytrue = [];
      this.getQueueHisTrue();
    }
  }
  async getQueueHis() {
    // let user_id = ""
    if (this.token) {
      let res: any = await this.queue.getQueueHistory(this.user_id._id);
      this.queuehistory = res;
      console.log(this.queuehistory)
    }

  }
  async getQueueHisTrue() {
    if (this.token) {
      let res: any = await this.queue.getQueueHistoryTrue(this.user_id._id);
      this.queuehistorytrue = res
      console.log(this.queuehistorytrue);
    }

  }
  async open(event) {
    const modal = await this.modalController.create({
      component: ModalDetailPage,
      componentProps: { _id: event }
    });
    return await modal.present();

    console.log(event);
  }
}
