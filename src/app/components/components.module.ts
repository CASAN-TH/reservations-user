import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
    ],
  exports: [
    ShopListComponent
  ]
})
export class ComponentsModule { }
