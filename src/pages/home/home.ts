import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import * as firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Keyword } from '../../metier/keyword';
import { Etape } from '../../metier/etape';
import { Annotation } from '../../metier/annotation';
import { Ingredient } from '../../metier/ingredient';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

listRecette ;
listObjRecette : Array<Recette> = new Array<Recette>() ;
longueur : number;
ifor : number;
  constructor(public navCtrl: NavController) {

    const ref : firebase.database.Reference = firebase.database().ref("Recette");
    this.listRecette = [];
    ref.on('value', itemSnapShot => {
      itemSnapShot.forEach(itemSnap=> {
        this.listRecette.push(itemSnap.val());
        console.log("test recup recette "+ this.listRecette.length);
        return false;
      });




}); 

   

  }

  onClickRecette(recette)
  {
    console.log("Ouverture de la page de la présentation brève de la recette");
    this.navCtrl.push("PresentationBrevePage",{recette : recette});
  }

  onClickAjoutRecette()
  {
    console.log("Ouverture de la page de l'ajout d'une recette");
    this.navCtrl.push("AjoutRecettePage");
  }

  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
