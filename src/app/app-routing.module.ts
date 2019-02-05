import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  { path: 'shop-detail/:_id', loadChildren: './shop-detail/shop-detail.module#ShopDetailPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'queue-detail', loadChildren: './pages/queue-detail/queue-detail.module#QueueDetailPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
   { path: 'modal-openimage', loadChildren: './modals/modal-openimage/modal-openimage.module#ModalOpenimagePageModule' },


  

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
