import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalOpenimagePage } from './modal-openimage.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOpenimagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalOpenimagePage]
})
export class ModalOpenimagePageModule {}
