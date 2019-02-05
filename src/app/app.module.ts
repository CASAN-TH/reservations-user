import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopService } from './services/shops/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalOpenimagePageModule } from './modals/modal-openimage/modal-openimage.module';
import { HeaderColor } from '@ionic-native/header-color/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    ModalOpenimagePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ShopService,
    HeaderColor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
