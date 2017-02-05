import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EventsPage} from '../pages/events/events';

import {InfoPage} from '../pages/info/info';
import {AdminEventsPage} from '../pages/admin-events/admin-events';
import {AdminEditInfoPage} from '../pages/admin-edit-info/admin-edit-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    InfoPage,
    AdminEventsPage,
    AdminEditInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    InfoPage,
    AdminEventsPage,
    AdminEditInfoPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
