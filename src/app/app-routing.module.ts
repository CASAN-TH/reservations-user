import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },  { path: 'shop-detail', loadChildren: './shop-detail/shop-detail.module#ShopDetailPageModule' },

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
