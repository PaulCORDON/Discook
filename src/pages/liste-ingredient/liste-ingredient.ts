import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListeIngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-ingredient',
  templateUrl: 'liste-ingredient.html',
})
export class ListeIngredientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeIngredientPage');
  }


  onClickParametre(){

    this.navCtrl.push('ParametresPage');
  
  }
  onClickRealisation(){
    this.navCtrl.push('RealisationRecettePage');

  }
}
