import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../metier/ingredient';

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
  listIngredient : Ingredient[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listIngredient=navParams.get("recette").listIngredient;
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
