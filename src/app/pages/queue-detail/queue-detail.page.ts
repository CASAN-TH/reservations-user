import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue/queue.service';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.page.html',
  styleUrls: ['./queue-detail.page.scss'],
})
export class QueueDetailPage implements OnInit {

  constructor(
    public queueService: QueueService
  ) { }

  ngOnInit() {
  }
  getQueueDetail() {
    // this.queueService.getQueue();
  }
  confirm() {
    console.log('123');
  }
  cancel() {
    console.log('33');
  }
}
