import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PresentationBrevePage } from '../pages/presentation-breve/presentation-breve'
import { ParametresPage } from '../pages/parametres/parametres';
import { ListeIngredientPage } from '../pages/liste-ingredient/liste-ingredient';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListeIngredientPage,
    ParametresPage,
    PresentationBrevePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListeIngredientPage,
    ParametresPage,
    PresentationBrevePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
