import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    ShopListComponent,
    TicketComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
    ],
  exports: [
    ShopListComponent,
    TicketComponent,
  ]
})
export class ComponentsModule { }
