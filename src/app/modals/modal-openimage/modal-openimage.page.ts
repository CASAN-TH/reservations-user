import { ShopService } from './../../services/shops/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { environment } from '../../../environments/environment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-openimage',
  templateUrl: './modal-openimage.page.html',
  styleUrls: ['./modal-openimage.page.scss'],
})
export class ModalOpenimagePage implements OnInit {
  @Input() image: any;
  
  img: any;

  @ViewChild('slider', { read: ElementRef })slider: ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };
 
  shopId: any;
  dataImage: Array<any> = []
  constructor(
    private shopService: ShopService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.shopId = window.localStorage.getItem(environment.apiURL + 'shop_id');
    // let data: any = this.route.snapshot.paramMap.get('i');
    console.log('shoP' + this.shopId);
    console.log(this.image);
    this.getShop();
  }
  async getShop() {
    try {
      let res: any = await this.shopService.getShopById(this.shopId);
      this.dataImage = res.data.imagereview;
      console.log(this.dataImage);
    } catch (error) {

    }
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }
 
  close() {
    this.modalController.dismiss();
  }
}
