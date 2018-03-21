import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-auxmap',
  templateUrl: 'auxmap.html',
})
export class AuxmapPage {

  lng:number = 19.429930;
  lat:number = -99.148423;
  accion:string = "Nueva ubicacion";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public geolocation: Geolocation, 
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.accion = navParams.data.accion;
    this.locatePhone();
  }

  dismissModal(){
    this.viewCtrl.dismiss({ mensaje: "Eres un pervertido sin remedio" });
  }

  locatePhone(){
    this.presentLoading({
      content: "Buscando tu posición",
      duracion: 2000
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
    }).catch((error) => {
      this.showAlert({
        title: "Error",
        subtitle: "No pudimos obtener tu ubicación, verifica que tengas activada tu ubicación o que estes conectado a alguna red",
        buttons: [
          'OK'
        ]
      });
    });
  }

  saveUbication(){
    
  }

  selectUbicacion(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  showAlert(content:any) {
    let alert = this.alertCtrl.create({
      title: content.title,
      subTitle: content.subtitle,
      buttons: content.buttons
    });
    alert.present();
  }

  presentLoading(content:any) {
    let loader = this.loadingCtrl.create({
      content: content.contenido,
      duration: content.duracion
    });
    loader.present();
  }
}