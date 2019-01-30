import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue/queue.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.page.html',
  styleUrls: ['./queue-detail.page.scss'],
})
export class QueueDetailPage implements OnInit {
  dataPeople: Array<any> = [
    {
      num: 1,
    }, {
      num: 2,
    }, {
      num: 3,
    }, {
      num: 4,
    }, {
      num: 5,
    }
  ]
  data: any;
  dataQueue: any;
  dataUser: any;
  shop_id: any;
  peoples: any;
  constructor(
    public route: ActivatedRoute,
    public queueService: QueueService,
    public navCrtl: NavController
  ) { }

  ngOnInit() {
    let user: any = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'));
    this.dataUser = user;
    let shop_id = window.localStorage.getItem(environment.apiURL + 'shop_id')
    this.shop_id = shop_id;
    console.log(shop_id)


    this.getQueueDetail();
  }
  async getQueueDetail() {
    try {
      let data = {
        _id: this.shop_id,
        user_id: this.dataUser
      }
      let res: any = await this.queueService.getQueue(data);
      this.dataQueue = res.data;
      console.log(res);
    } catch (error) {

    }

  }
  getValue(e) {
    this.data = e;
    console.log(e);
  }
  async confirm() {
    // console.log(this.data);
    // this.getValue(e);
    // console.log(this.peoples);
    try {
      let dataSave = {
        peoples: '5',
        shop_id: this.shop_id,
        status: true
      }
      let res: any = await this.queueService.saveQueue(dataSave);
      this.navCrtl.navigateForward('');
    } catch (error) {
      alert(error)
    }

  }
  cancel() {
    this.navCrtl.navigateForward('');
    // console.log('33');
  }
}
