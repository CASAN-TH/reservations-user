import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() data: any;
  @Output() shopdatalist: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    // console.log(this.data)
  }
  ngOnInit() {
    // console.log(this.data)
  }

  shopdetail = [
    {
      name: "Shop Boom",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Food_Shop_on_Electric_Avenue_-_geograph.org.uk_-_430378.jpg"
    },
    {
      name: "Shop Pure",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Food_Shop_on_Electric_Avenue_-_geograph.org.uk_-_430378.jpg"
    },
    {
      name: "Shop Nid Nid",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Food_Shop_on_Electric_Avenue_-_geograph.org.uk_-_430378.jpg"
    },
    {
      name: "Shop Nut Shop Nut Shop Nut",
      image: "http://www.lepfitness.co.uk/wp-content/uploads/2017/02/Shopping-basket.jpg"
    }
  ]
}
