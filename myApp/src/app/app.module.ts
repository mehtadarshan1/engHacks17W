import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EventsPage} from '../pages/events/events';

import {InfoPage} from '../pages/info/info';
//noinspection TypeScriptCheckImport
import {AdminEventsPage} from '../pages/admin-events/admin-events';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBKDHYEC4jSHB4XE_VSs2iIa65mhosetyU",
    authDomain: "hackbox-f30fe.firebaseapp.com",
    databaseURL: "https://hackbox-f30fe.firebaseio.com",
    storageBucket: "hackbox-f30fe.appspot.com",
    messagingSenderId: "698553500724"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    InfoPage,

    AdminEventsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    InfoPage,
    AdminEventsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
