import { Component } from '@angular/core';
import { QueueService } from '../services/queue/queue.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  queuehistory: any;
  constructor(public queue: QueueService) {

  }
  ngOnInit() {
    this.getQueueHis();
  }

  async getQueueHis() {
    let user_id = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'))
    // let user_id = ""
    let res: any = await this.queue.getQueueHistory(user_id._id)
    this.queuehistory = res;
    console.log(this.queuehistory)
  }

}
