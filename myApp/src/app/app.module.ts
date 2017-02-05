import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EventsPage} from '../pages/events/events';
//noinspection TypeScriptCheckImport
import {AdminEventsPage} from '../pages/admin-events/admin-events';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    AdminEventsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    AdminEventsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
