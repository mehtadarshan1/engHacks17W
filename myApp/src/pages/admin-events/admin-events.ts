import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminEditInfoPage } from '../../pages/admin-edit-info/admin-edit-info';
import {GalleryPage} from '../gallery/gallery';
import { ImagePicker } from 'ionic-native';


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
  AdminEditInfo(r) {
    this.navCtrl.push(AdminEditInfoPage);
  }

  public openGallery(): void {
    let options:{maximumImagesCount:number; width:number; height:number; quality:number} = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    ImagePicker.getPictures(options).then(
      file_uris => this.navCtrl.push(GalleryPage, {images: file_uris}),
      err => console.log('uh oh')
    );
  }


}
