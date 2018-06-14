import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import *as firebase from 'firebase';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import {PresentationCompletePage} from '../pages/presentation-complete/presentation-complete'
import { AuthentificationPage } from '../pages/authentification/authentification';
import { DatabaseProvider } from '../providers/database/database';
import { Ingredient } from '../metier/ingredient';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AuthentificationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public globalVars: GlobalVarsProvider,public base:DatabaseProvider) {
    platform.ready().then(() => {
      this.base.GetAllIngredients().then((rep) => {
        this.globalVars.setListeIngredientsComplete(rep);
        console.log('listeCompleteIngredient')
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
    // Config firebase
    var config = {
      apiKey: "AIzaSyCGIo2gpPLN9kmteqFJ6IO-2drDFfiH4R4",
      authDomain: "discook-70c2b.firebaseapp.com",
      databaseURL: "https://discook-70c2b.firebaseio.com",
      projectId: "discook-70c2b",
      storageBucket: "discook-70c2b.appspot.com",
      messagingSenderId: "839266197068"
    };
    firebase.initializeApp(config);

    

  }
}

