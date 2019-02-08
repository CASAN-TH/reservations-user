import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: any;
  constructor(public loadingController: LoadingController,
    public toastController: ToastController) { }
  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'กำลังรอ...',
      translucent: true,
      mode: 'ios'
    });
    return await this.loading.present();
  }

  async dismissOnPageChange() {
    return await this.loading.dismiss();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'ออกจากระบบสำเร็จ',
      position: 'top',
      mode: 'ios',
      duration: 2500,
      color: 'light'
    });
    toast.present();
  }
}
