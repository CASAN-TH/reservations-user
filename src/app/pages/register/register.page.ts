import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../environments/environment';

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
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  async confirm() {
    try {
      const res: any = await this.authService.register(this.regisData);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      console.log(res);
    } catch (error) {
      console.log(error);
      // if (error) {
      //   if (error['error']['message'] === 'Email already exists') {
      //     alert('อีเมล์นี้มีผู้ใช้งานแล้ว');
      //   } else if (error['error']['message'] === 'Username already exists') {
      //     alert('มีชื่อผู้ใช้งานนี้ในระบบเเล้ว');
      //   } else if (error['error']['message'] === 'Citizenid already exists') {
      //     alert('เลขบัตรประจำประชาชนมีผู้ใช้งานแล้ว');
      //   } else if (error['error']['message'] === 'Please fill a valid email address') {
      //     alert('อีเมล์ไม่ถูกต้อง');
      //   }
      // }
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
