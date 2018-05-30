import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';

/**
 * Generated class for the AjoutRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-recette',
  templateUrl: 'ajout-recette.html',
})
export class AjoutRecettePage {
  reference: firebase.database.Reference;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    /* REQUETE TEST AJOUT BDD */
    this.reference = firebase.database().ref('Recette/'+ 1);
    this.reference.set({
        id :1,
        name : "Cookie",
        image : "Image de Cookie",
        presentation: " Voici la super recette de cookies de ma grand-mère ",
        difficulte: 2,
        nb_personnes: 4,
        duree_prepa: "15 min",
        duree_cuisson: "20 min"
      // Etapes
      // Ingredients

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutRecettePage');
  }

  AddIngredient(){
    this.navCtrl.push('ListeIngredientPage');
  }

  onClickParametre()
  {
    this.navCtrl.push(`ParametresPage`);
  }

}
