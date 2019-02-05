import { environment } from 'src/environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HeaderColor } from '@ionic-native/header-color/ngx';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() data: any;
  @Output() shopdatalist: EventEmitter<any> = new EventEmitter<any>();



  constructor(
    private headerColor: HeaderColor,
    public navCtrl: NavController
  ) {
    this.headerColor.tint('#becb29');
  }
  ngOnInit() {
    this.headerColor.tint('#becb29');
  }
  onDetail(e) {
    window.localStorage.setItem(environment.apiURL + 'shop_id', e);
    this.navCtrl.navigateForward('shop-detail/' + e);
  }

}
