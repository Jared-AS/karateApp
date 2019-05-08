import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KarateService } from '../../services/karate.service';
import { Subscription } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-waiting-competitor',
  templateUrl: 'waiting-competitor.html',
})
export class WaitingCompetitorPage {

  sessionName: string;
  isCompetitorPresent: boolean;
  pages = [
    {
      icon: 'trash',
      title: 'Eliminar jueces',
      component: 'DeleteJudgesPage'
    }
  ]
  subscription: Subscription;
  isSpectator;
  spectatorSubscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController, 
      private service: KarateService) {
    this.sessionName = navParams.get('sessionName');
    this.isSpectator = navParams.get('isSpectator');
  }

  ionViewDidLoad() {
    this.subscription = this.service.getStatusBySession(this.sessionName).subscribe(data =>{
      this.isCompetitorPresent = data[0].nextCompetitor;
      if(this.isSpectator && data[0].competing) {
        this.navCtrl.setRoot('WaitingKataManagerPage', {
          sessionName: this.sessionName,
          isSpectator: true
        })
      }
    })
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  goToKata() {
    this.service.changeCompetitionStatus(this.sessionName, true);
    this.navCtrl.setRoot('WaitingKataManagerPage', {
      sessionName: this.sessionName
    })
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
            this.navCtrl.setRoot('KarateHomePage');
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    await alert.present();

  }

  openPage(page) {
    this.navCtrl.push(page.component, {
      sessionName: this.sessionName
    });
  }

}
