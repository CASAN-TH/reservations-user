import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NavController, ModalController } from '@ionic/angular';
import { SigninPage } from '../pages/signin/signin.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dataToken: any;
  dataProfile: any;
  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
    public loading: LoadingService

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
    this.loading.presentLoadingWithOptions();
    window.localStorage.clear()
    setTimeout(() => {
      this.ionViewWillEnter();
      this.loading.dismissOnPageChange();
    }, 1400);
    this.loading.presentToastWithOptions('ออกจากระบบสำเร็จ');

  }
  async login() {
    const modal = await this.modalController.create({
      component: SigninPage,
      componentProps: { value: 123 }
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data);
    if (data) {
      this.ionViewWillEnter();
    } else if (data.data.result === 'closePage') {
      this.modalController.dismiss();
    }
  }
}
