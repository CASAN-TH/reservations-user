import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() queue: Array<any>;
  @Input() queuetrue: any;
  constructor() { }

  ngOnInit() {
  }

}
