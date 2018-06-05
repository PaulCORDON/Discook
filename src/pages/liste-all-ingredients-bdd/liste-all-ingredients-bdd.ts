import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../metier/ingredient';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the ListeAllIngredientsBddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-all-ingredients-bdd',
  templateUrl: 'liste-all-ingredients-bdd.html',
})
export class ListeAllIngredientsBddPage {
  listeIngredients:Array<Ingredient>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public base : DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeAllIngredientsBddPage');
    this.base.GetAllIngredients().then((rep) => {
      this.listeIngredients=rep;
      console.log(`getParamEm2 ok`);  
    })
  }

}
