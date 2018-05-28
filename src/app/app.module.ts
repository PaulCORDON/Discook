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
import { ParametresPageModule } from '../pages/parametres/parametres.module';
import { ListeIngredientPageModule } from '../pages/liste-ingredient/liste-ingredient.module';
import { PresentationBrevePageModule } from '../pages/presentation-breve/presentation-breve.module';
import { AjoutRecettePageModule } from '../pages/ajout-recette/ajout-recette.module';
import { AnnotationRecettePageModule } from '../pages/annotation-recette/annotation-recette.module';
import { EditionRecettePageModule } from '../pages/edition-recette/edition-recette.module';
import { PresentationCompletePageModule } from '../pages/presentation-complete/presentation-complete.module';
import { RealisationRecettePageModule } from '../pages/realisation-recette/realisation-recette.module';
import { AjoutRecettePage } from '../pages/ajout-recette/ajout-recette';
import { AnnotationRecettePage } from '../pages/annotation-recette/annotation-recette';
import { EditionRecettePage } from '../pages/edition-recette/edition-recette';
import { PresentationCompletePage } from '../pages/presentation-complete/presentation-complete';
import { RealisationRecettePage } from '../pages/realisation-recette/realisation-recette';

@NgModule({
  declarations: [
    MyApp,
    HomePage
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
    RealisationRecettePageModule
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
    RealisationRecettePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
