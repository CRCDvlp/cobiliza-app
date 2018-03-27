import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;
  emailc:string;
  pass:string;
  passc:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.validate()){
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword( this.email, this.pass)
      .then( response => {
        let alert = this.alertCtrl.create({
          title: "Registro exitoso",
          message: "Has sido registrado exitosamente, inicia sesion para continuar"
        });
        alert.present().then(info =>{
          
        });
      }).catch( e => {
        let alert = this.alertCtrl.create({
          title: "Error",
          message: e
        });
        alert.present();
      });
    }else{
      let alert = this.alertCtrl.create({
        title: "Error",
        message: this.valMessage()
      });
      alert.present();
    }
  }

  validate(){
    return this.email == this.emailc && this.pass == this.passc;
  }

  valMessage(){
    let mensaje:string;
    if(this.email != this.emailc){
      mensaje = "Los email no corresponden entre si";
    }
    if(this.pass != this.passc){
      mensaje = "Los password no coninciden";
    }
    return mensaje;
  }
}
