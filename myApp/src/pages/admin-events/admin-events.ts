import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminEditInfoPage } from '../../pages/admin-edit-info/admin-edit-info';


/*
  Generated class for the AdminEvents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin-events',
  templateUrl: 'admin-events.html'
})
export class AdminEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEventsPage');
  }
<<<<<<< HEAD
  
=======

  AdminEditInfo(r) {
    this.navCtrl.push(AdminEditInfoPage);
  }

>>>>>>> 05e58f5f1133c395ffb66afd86fc985a26f3db45
}
