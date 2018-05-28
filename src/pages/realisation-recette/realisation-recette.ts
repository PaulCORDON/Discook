import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RealisationRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realisation-recette',
  templateUrl: 'realisation-recette.html',
})
export class RealisationRecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationRecettePage');
  }

  onClickEtapePrecedente(){

  }

  onClickEtapeSuivante(){
    
  }

}
