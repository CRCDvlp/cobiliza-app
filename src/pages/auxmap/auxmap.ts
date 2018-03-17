import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-auxmap',
  templateUrl: 'auxmap.html',
})
export class AuxmapPage {

  lat: number = 51.678418;
  lng: number = 7.809007;
  accion:string = "Nueva ubicacion";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.accion = navParams.data.accion;
  }

  dismissModal(){
    this.viewCtrl.dismiss({ mensaje: "Eres un pervertido sin remedio" });
  }

  saveUbication(){
    
  }

  selectUbicacion(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}