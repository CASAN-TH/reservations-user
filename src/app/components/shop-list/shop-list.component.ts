import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() data: any;
  @Output() shopdatalist: EventEmitter<any> = new EventEmitter<any>();



  constructor(

    public navCtrl: NavController
  ) {

  }
  ngOnInit() {

  }
  onDetail(e) {
    this.navCtrl.navigateForward('shop-detail/' + e);
  }

}
