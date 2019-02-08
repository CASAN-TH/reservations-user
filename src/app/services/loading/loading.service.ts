import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: any;
  constructor(public loadingController: LoadingController,
    public toastController: ToastController) { }

  // async presentLoading() {
  //   this.loading = await this.loadingController.create({
  //     message: 'Hellooo',
  //     duration: 2000
  //   });
  //   return await this.loading.present();
  // }

  // async presentLoadingWithOptions() {
  //   this.loading = await this.loadingController.create({
  //     spinner: 'crescent',
  //     message: 'กำลังรอ...',
  //     translucent: true,
  //     mode: 'ios'
  //   });
  //   return await this.loading.present();
  // }
  // async dismissOnPageChange() {
  //   return await this.loading.dismiss();
  // }


  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     message: 'ออกจากระบบสำเร็จ',
  //     position: 'top',
  //     mode: 'ios',
  //     duration: 2500,
  //     color: 'light'
  //   });
  //   toast.present();
  // }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'กำลังโหลด...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      mode:'ios'
      
    });
    return await loading.present();
  }
  async dismissOnPageChange() {
    return  await this.loadingController.dismiss();
  }
}
