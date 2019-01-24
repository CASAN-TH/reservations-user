import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ShopListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
    ],
  exports: [
    ShopListComponent,
    RegisterComponent
  ]
})
export class ComponentsModule { }
