import { Component } from '@angular/core';
import { QueueService } from '../services/queue/queue.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user_id: any;
  queuehistory: any;
  queuehistorytrue: any;
  constructor(public queue: QueueService) {

  }
  ngOnInit() {
    this.user_id = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'))

    this.getQueueHis();
    this.getQueueHisTrue();
  }

  async getQueueHis() {
    // let user_id = ""
    let res: any = await this.queue.getQueueHistory(this.user_id._id);
    this.queuehistory = res;
    console.log(this.queuehistory)
  }
  async getQueueHisTrue() {
    let res: any = await this.queue.getQueueHistoryTrue(this.user_id._id);
    this.queuehistorytrue = res
  }
}
