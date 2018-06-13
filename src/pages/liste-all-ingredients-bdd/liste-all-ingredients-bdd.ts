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
      this.listeIngredients=rep.sort();
      console.log(`getListeIngredients ok`+JSON.stringify(this.listeIngredients));  
    })
  }
  onClickIngredients(ing:Ingredient){
    if(ing.isSelected){
      ing.isSelected=false;
    }
    else{
      ing.isSelected=true;
    }
  }
  onClickValider(){
    this.listeIngredients.forEach(ing => {
      if(ing.isSelected){
        this.listeIngredientsSelectionner.push(ing);
      }
    });
    console.log(JSON.stringify(this.listeIngredientsSelectionner));
    this.varGlob.setListeIngredientsSelectionner(this.listeIngredientsSelectionner);
    this.navCtrl.pop();
  }
}
