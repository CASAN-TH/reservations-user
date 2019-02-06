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
  people: any;
  peopleCount: any = 40;
  dataPeople: Array<any> = []
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
    console.log(this.dataUser);

    this.getPeople();
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
  getPeople() {
    for (let i = 0; i < this.peopleCount; i++) {
      this.dataPeople.push(i + 1);
    }
    console.log(this.dataPeople);
  }
  getValue(e) {
    // console.log(e);
    this.data = e;
    console.log(this.people);
  }
  async confirm() {
    console.log(this.people);
    // this.getValue(e);
    // console.log(this.peoples);
    try {
      let dataSave = {
        peoples: this.people,
        shop_id: this.shop_id,
        user_id: this.dataUser._id,
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
