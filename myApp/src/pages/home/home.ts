import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EventsPage} from '../events/events';
import {AdminEventsPage} from '../admin-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    
  }

  eventsPage(r) {
  	this.navCtrl.push(EventsPage);
  }

}
