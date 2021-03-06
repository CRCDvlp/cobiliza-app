import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    menu.enable(true);
    console.log('userInfo/' + firebase.auth().currentUser.uid);
    let userInfo:any = firebase.database().ref('userinfo/' + firebase.auth().currentUser.uid);
  }

}