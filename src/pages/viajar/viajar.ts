import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-viajar',
  templateUrl: 'viajar.html',
})
export class ViajarPage {

  lng:number;
  lat:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.locatePhone();
  }

  selectUbicacion(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  locatePhone(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
