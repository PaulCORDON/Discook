import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../metier/ingredient';
import { DatabaseProvider } from '../../providers/database/database';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

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
  listeIngredientsSelectionner: Array<Ingredient>=[];
  listeIngredients:Array<Ingredient>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public base : DatabaseProvider, public varGlob : GlobalVarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeAllIngredientsBddPage');
    this.base.GetAllIngredients().then((rep) => {
      this.listeIngredients=rep;
      console.log(`getParamEm2 ok`);  
    })
  }
  onClickIngredients(ing:Ingredient){
    this.listeIngredientsSelectionner.push(ing);
  }
  onClickValider(){
    console.log(JSON.stringify(this.listeIngredientsSelectionner));
    this.varGlob.setListeIngredientsSelectionner(this.listeIngredientsSelectionner);
  }
}
