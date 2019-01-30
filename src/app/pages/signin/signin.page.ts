import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) { }

  username: any = '';
  password: any = '';


  ngOnInit() {
  }
  async confirm() {
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
      this.navCtrl.navigateForward("queue-detail");
    } catch (error) {

    }


  }
  cancel() {
    this.navCtrl.goBack();
  }
  singup() {
    this.navCtrl.navigateForward('register');

  }





























}
