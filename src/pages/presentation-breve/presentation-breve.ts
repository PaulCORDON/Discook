import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresentationBrevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentation-breve',
  templateUrl: 'presentation-breve.html',
})
export class PresentationBrevePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationBrevePage');
  }



  Editer(){
    this.navCtrl.push(`EditionRecettePage`);
  }

  
  Voir(){
    this.navCtrl.push(`PresentationCompletePage`);
  } 
  
  Commencer(){
    this.navCtrl.push(`ListeIngredientPage`);
  }

}
