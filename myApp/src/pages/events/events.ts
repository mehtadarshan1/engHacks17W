import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InfoPage} from "../info/info";

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
<<<<<<< HEAD
  UserInfoPage(r) {
  	this.navCtrl.push(InfoPage)
  }
=======

>>>>>>> 05e58f5f1133c395ffb66afd86fc985a26f3db45
}
