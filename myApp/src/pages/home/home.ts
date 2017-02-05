import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import {AdminEventsPage} from '../admin-events/admin-events';
import {EventsPage} from "../events/events";
import {FirebaseListObservable, AngularFire} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

	photos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private af: AngularFire) {
    
  }

  AdminEventsPage(r) {
  	this.navCtrl.push(AdminEventsPage);
  }
  UserEventsPage(r) {
    this.navCtrl.push(EventsPage);
  }

  ngOnInit(){
  	this.photos = this.af.database.list('/photos');
  }


  takePhoto(){
  	Camera.getPicture({
      destinationType: Camera.DestinationType.FILE_URI,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true
    }).then((imageData) => {
    	this.photos.push({src: "data:image/jpeg;base64," + imageData, likes: 0, event_name: "engHacks"});
    }, (err) => {
    	console.log(err);
    });
  }

  deletePhoto(photoKey: string){
  	this.photos.remove(photoKey);
  }

  likePhoto(photoKey: string, likes: number){

  	this.photos.update(photoKey, {likes: likes + 1});

  }


}
