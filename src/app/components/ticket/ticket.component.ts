import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() queue: Array<any>;
  constructor() { }

  ngOnInit() {
  }

showmodal(item){
console.log(item);
}
}
