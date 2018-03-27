import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PlacesPage } from '../pages/places/places';
import { RegisterPage } from '../pages/register/register';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { ViajarPage } from '../pages/viajar/viajar';
import { ProgramadosPage } from '../pages/programados/programados';

import { userData } from '../data/data.user';

import firebase from 'firebase';
import { fireConfig } from '../config/firebase.config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  usuario:string;
  rootPage:any = LoginPage;
  home:any = HomePage;
  login: any = LoginPage;
  places:any = PlacesPage;
  register:any = RegisterPage;
  userInfo:any = UserinfoPage;
  viajar:any = ViajarPage;
  programados:any = ProgramadosPage;
  fireCfg: any = fireConfig;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.usuario = userData.datos.nombre;
    firebase.initializeApp(this.fireCfg);
  }

  navegarA(pagina:any){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}

