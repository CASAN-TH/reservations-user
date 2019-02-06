import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() queue: any;
  constructor() { }

  ngOnInit() {
    console.log(this.queue);
  }

}
