import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MomdalHistoryDetailPage } from './momdal-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MomdalHistoryDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MomdalHistoryDetailPage]
})
export class MomdalHistoryDetailPageModule {}
