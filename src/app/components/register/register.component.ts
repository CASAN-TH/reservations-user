import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regisData = {};
  // @Input() resgisData: any;
  constructor() { }

  ngOnInit() {
  }
  confirm() {
    console.log(this.regisData);
  }
}
