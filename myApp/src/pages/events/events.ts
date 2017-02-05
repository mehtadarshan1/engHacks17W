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
  items = [
    'UofT Hacks',
    'HackCU III',
    'enghacks',
    'hackNY',
    'CarlHacks'
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
   infoPage(r) {
  	this.navCtrl.push(InfoPage);
  }
}
