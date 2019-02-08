import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() queue: any;
  @Input() queuetrue: any;
  @Output() _idqueue: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    
  }

  showmodal(item) {
    console.log(item);
    this._idqueue.emit(item._id);
  }
}
