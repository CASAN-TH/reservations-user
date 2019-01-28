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
    let body = {
      username: this.username,
      password: this.password
    }
    console.log(body);

    let res: any = await this.authService.signin(body);
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@token', res.token);
    //this.navCtrl.navigateForward("")

  }
  cancel() {
    this.navCtrl.navigateForward('');
  }
  singup() {
    this.navCtrl.navigateForward('register');

  }





























}
