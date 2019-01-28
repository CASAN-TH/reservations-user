import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {

  review = [
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
  "https://mpics.mgronline.com/pics/Images/560000001863501.JPEG",
  "https://www.ryoiireview.com/upload/article/201705/1495616207_9bbe0a425c31ae727bf9091a7da5d428.jpg",
  "http://www.theshabu.com/wp-content/uploads/2017/11/Niku-Nabe-Buffet-@%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-BKreview-60-of-83.jpg",
  "https://www.ktc.co.th/sites/ktc/imagefile/1491908311656/impro-shabu-bootueng-th-02.jpg",
  "http://www.theshabu.com/wp-content/uploads/2017/06/sukiyaki-shabu-shabu-1.gif",
  "http://juandoncel.com/wp-content/uploads/2018/10/tp1.jpg",
  "https://img.wongnai.com/p/1920x0/2016/08/15/516a694bae2a4c29ba4c8c5795828ec2.jpg",
  "https://www.ilovetogo.com/FileUpload/Editor/ImagesUpload/WebContent/HipThailand/GoEating/5310/Shimizu_Shabu29.jpg",
  "https://www.ryoiireview.com/upload/article/201510/1443691190_2.jpg",
  "./assets/icon/add.png"
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
