import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dataToken: any;
  dataProfile: any;
  constructor(
    private navCtrl: NavController
  ) {

  }

  ionViewWillEnter() {
    let res: any = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'));
    this.dataProfile = res;
    console.log(res);
    let token: any = window.localStorage.getItem(environment.apiURL + '@token');
    this.dataToken = token;
  }
  ngOnInit() {
    let res: any = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'));
    this.dataProfile = res;
    console.log(res);
    let token: any = window.localStorage.getItem(environment.apiURL + '@token');
    this.dataToken = token;
  }

  logout() {
    window.localStorage.clear()
    this.ionViewWillEnter()
  }
  login() {
    this.navCtrl.navigateForward('signin');
  }
}
