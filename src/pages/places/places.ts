import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { userData } from '../../data/data.user';
import { AuxmapPage } from '../auxmap/auxmap';

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  places:any;
  auxMap:any = AuxmapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.places = userData.ubicaciones;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  elimminarPlace(indice:number){

  }

  changePlace(indice:number){

  }

  modalUbicacion(){
    let modal = this.modalCtrl.create(AuxmapPage, {accion: 'Nueva ubicación', nombre: '', lat: '', long: ''});
    modal.present();
    /*modal.onDidDismiss( datos => {
      if(datos){
        this.mensaje = datos.mensaje;
      }
    });*/
  }
}
