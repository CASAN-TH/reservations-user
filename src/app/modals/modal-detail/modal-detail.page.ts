import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.page.html',
  styleUrls: ['./modal-detail.page.scss'],
})
export class ModalDetailPage implements OnInit {
  @Input() _id: any;
 
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this._id);
  }
  close() {
    this.modalController.dismiss();
  
  }
}
