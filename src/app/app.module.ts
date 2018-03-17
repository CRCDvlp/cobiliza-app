import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PlacesPage } from '../pages/places/places';
import { RegisterPage } from '../pages/register/register';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { ViajarPage } from '../pages/viajar/viajar';
import { AuxmapPage } from '../pages/auxmap/auxmap';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PlacesPage,
    RegisterPage,
    UserinfoPage,
    ViajarPage,
    AuxmapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      pageTransition: 'ios-transition'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDprIqedLL_wKnkfRHhxppRSuBf2-aXZGg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PlacesPage,
    RegisterPage,
    UserinfoPage,
    ViajarPage,
    AuxmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
