import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AdminEventsPage} from '../admin-events/admin-events';
import {EventsPage} from "../events/events";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    
  }

  AdminEventsPage(r) {
  	this.navCtrl.push(AdminEventsPage);
  }
  UserEventsPage(r) {
    this.navCtrl.push(EventsPage)
  }

}
