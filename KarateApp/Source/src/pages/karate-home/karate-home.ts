import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-karate-home',
  templateUrl: 'karate-home.html',
})
export class KarateHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
  }

  joinSesion() {
    this.navCtrl.setRoot('JoinSesionPage');
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KarateHomePage');
  }

  goToCreate () {
    this.navCtrl.setRoot('CreatePanelPage');
    this.navCtrl.popToRoot();
  }

 async alertExit() {
      const alert = await this.alertController.create({
        title: 'Salir',
        message: 'Estas seguro de esta salir',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Si',
            handler: () => {
              this.navCtrl.setRoot('KarateLoginPage');
              this.navCtrl.popToRoot();
            }
          }
        ]
      });
      await alert.present();
  
  }

}
