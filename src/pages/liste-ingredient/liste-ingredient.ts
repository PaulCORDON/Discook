import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recette } from '../../metier/recette';
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
  recette : Recette;
  listIngredients : Ingredient [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recette = this.navParams.get("recette");
    this.listIngredients = this.recette.ingredients;
    console.log("ingredient :  " + this.listIngredients[0].nom);
    console.log("texte de la premiere étapes" + this.recette.etapes[1].texte);
    console.log(this.recette.presentation);
    
    
    
  
    console.log("longueur de la liste des ingédients de la recette " +this.recette.ingredients.length);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeIngredientPage');
  }


  onClickParametre(){

    this.navCtrl.push('ParametresPage');
  
  }
  onClickRealisation(){
    this.navCtrl.push('RealisationRecettePage',{recette : this.recette});

  }
}
