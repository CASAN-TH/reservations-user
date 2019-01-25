import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {

  review = [
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg",
  "https://kiji.life/eats/wp-content/uploads/2018/09/FCM_3296-copy.jpg"
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
