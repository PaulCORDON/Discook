import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PresentationBrevePage } from '../pages/presentation-breve/presentation-breve'
import { ParametresPage } from '../pages/parametres/parametres';
import { ListeIngredientPage } from '../pages/liste-ingredient/liste-ingredient';
import { ParametresPageModule } from '../pages/parametres/parametres.module';
import { ListeIngredientPageModule } from '../pages/liste-ingredient/liste-ingredient.module';
import { PresentationBrevePageModule } from '../pages/presentation-breve/presentation-breve.module';
import { AjoutRecettePageModule } from '../pages/ajout-recette/ajout-recette.module';
import { AnnotationRecettePageModule } from '../pages/annotation-recette/annotation-recette.module';
import { EditionRecettePageModule } from '../pages/edition-recette/edition-recette.module';
import { PresentationCompletePageModule } from '../pages/presentation-complete/presentation-complete.module';
import { RealisationRecettePageModule } from '../pages/realisation-recette/realisation-recette.module';
import { AjoutRecettePage } from '../pages/ajout-recette/ajout-recette';
import { CreditPageModule } from '../pages/credit/credit.module';
import { CreditPage } from '../pages/credit/credit';
import { AnnotationRecettePage } from '../pages/annotation-recette/annotation-recette';
import { EditionRecettePage } from '../pages/edition-recette/edition-recette';
import { PresentationCompletePage } from '../pages/presentation-complete/presentation-complete';
import { RealisationRecettePage } from '../pages/realisation-recette/realisation-recette';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { Crop } from '@ionic-native/crop';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { PipesModule } from '../pipes/pipes.module';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationPage } from '../pages/authentification/authentification';
var config = {
  apiKey: "AIzaSyCGIo2gpPLN9kmteqFJ6IO-2drDFfiH4R4",
  authDomain: "discook-70c2b.firebaseapp.com",
  databaseURL: "https://discook-70c2b.firebaseio.com",
  projectId: "discook-70c2b",
  storageBucket: "discook-70c2b.appspot.com",
  messagingSenderId: "839266197068"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthentificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AjoutRecettePageModule,
    AnnotationRecettePageModule,
    EditionRecettePageModule,
    ListeIngredientPageModule,
    ParametresPageModule,
    PresentationBrevePageModule,
    PresentationCompletePageModule,
    RealisationRecettePageModule,
    CreditPageModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    PipesModule, 
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AjoutRecettePage,
    AnnotationRecettePage,
    EditionRecettePage,
    ListeIngredientPage,
    ParametresPage,
    PresentationBrevePage,
    PresentationCompletePage,
    AuthentificationPage, 
    RealisationRecettePage,
    CreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Crop,
    Base64,
    GlobalVarsProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
