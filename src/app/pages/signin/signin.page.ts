import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../services/loading/loading.service';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public loading: LoadingService,
    public modalController: ModalController
  ) { }

  username: any = '';
  password: any = '';


  ngOnInit() {
  }
  async confirm() {
    await this.loading.presentLoadingWithOptions();
    try {
      let body = {
        username: this.username,
        password: this.password
      }
      console.log(body);
      let res: any = await this.authService.signin(body);
      console.log(res);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      if (res) {
        let me: any = await this.authService.me()
        console.log(me)
        window.localStorage.setItem(environment.apiURL + 'user', JSON.stringify(me.data));
      }
      await this.loading.dismissOnPageChange();
      this.modalController.dismiss({
        'result': 'getNewData'
      });
      // this.navCtrl.navigateBack('');
    } catch (error) {
      console.log(error);
      this.loading.dismissOnPageChange();
      if (error) {
        if (error.error.message == 'Username or Password is invalid.') {
          let dataError = 'Username หรือ Password ไม่ถูกต้อง'
          await this.loading.presentToastWithOptions(dataError);
        }
      }
    }


  }
  cancel() {
    // this.navCtrl.navigateForward('');
    this.modalController.dismiss();

  }
  async singup() {
    const modal = await this.modalController.create({
      component: RegisterPage,
      componentProps: { value: 123 }
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data.data);
    if (data.data.result === 'closePage') {
      console.log('lllll')
      this.modalController.dismiss();
    }
    setTimeout(() => {
      this.loading.dismissOnPageChange();
    }, 500);

  }





























}
