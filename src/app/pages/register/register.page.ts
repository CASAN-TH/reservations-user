import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regisData = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: ''
  };

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public loading: LoadingService
  ) { }

  ngOnInit() {
  }
  async confirm() {
    await this.loading.presentLoadingWithOptions();
    try {
      const res: any = await this.authService.register(this.regisData);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      console.log(res);
      await this.loading.dismissOnPageChange();
      this.navCtrl.navigateForward('queue-detail');
    } catch (error) {
      await this.loading.dismissOnPageChange();
      if (error) {
        if (error.error.message === '11000 duplicate key error collection: auth.users index: username already exists') {
          await this.loading.presentToastWithOptions('Username ซ้ำ')
        } else if (error.error.message === '11000 duplicate key error collection: auth.users index: email already exists') {
          await this.loading.presentToastWithOptions('อีเมลนี้มีผู้ใช้งานแล้ว')
        }
      }
    }
  }
  cancel() {
    // this.regisData = {
    //   username: '',
    //   password: '',
    //   firstname: '',
    //   lastname: '',
    //   email: ''
    // };
    this.navCtrl.navigateForward('signin');
  }
}
