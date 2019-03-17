import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StartKataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-kata',
  templateUrl: 'start-kata.html',
})
export class StartKataPage {

  sessionName:string;
  judgeName: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sessionName = navParams.get('sessionName');
    this.judgeName = navParams.get('judgeName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartKataPage');
  }

}
