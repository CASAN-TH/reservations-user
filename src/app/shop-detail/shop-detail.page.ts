
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../services/shops/shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage 
implements OnInit {
  [x: string]: any;

  review = [
    "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
    "https://mpics.mgronline.com/pics/Images/560000001863501.JPEG",

    "http://www.theshabu.com/wp-content/uploads/2017/11/Niku-Nabe-Buffet-@%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-BKreview-60-of-83.jpg",
    "https://www.ktc.co.th/sites/ktc/imagefile/1491908311656/impro-shabu-bootueng-th-02.jpg",

    "https://www.ilovetogo.com/FileUpload/Editor/ImagesUpload/WebContent/HipThailand/GoEating/5310/Shimizu_Shabu29.jpg",

    "./assets/icon/add.png"

  ]
  requestShoplist: string;
  authService: any;

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public ShopService: ShopService
  ) { }

  async ngOnInit() {
    this.requestShoplist = this.route.snapshot.paramMap.get('_id');
    let _id = {
      shopid: this.requestShoplist
    }
    console.log(_id);

    let res: any = await this.ShopService.getShopById(this.requestShoplist);
    console.log(res);
  }
  back() {
    this.navCtrl.navigateForward('');
  }
  reserv() {
    this.navCtrl.navigateForward('queue-detail');
  }


}

