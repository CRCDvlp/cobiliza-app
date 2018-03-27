import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import firebase from 'firebase';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registro: any = RegisterPage;
  email:string;
  cont:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public menu: MenuController) {
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.cont).then(info => {
      let alert = this.alertCtrl.create({
        title: "Login correcto",
        message: "Comienza a viajar"
      });
      alert.present();
      this.navCtrl.setRoot( HomePage, { 'uid': info.uid} );
    }).catch(error => {
      let alert = this.alertCtrl.create({
        title: "Error",
        message: "Error al iniciar sesión: " + error
      });
      alert.present();
    });
  }
}
