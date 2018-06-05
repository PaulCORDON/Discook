import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import * as firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DatabaseProvider } from '../../providers/database/database';
import { Ingredient } from '../../metier/ingredient';
import { Etape } from '../../metier/etape';
import { Annotation } from '../../metier/annotation';



import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listRecette : Recette [] = [];
  etape : Etape;
  anno : Annotation;

  constructor(public navCtrl: NavController, public base : DatabaseProvider,public varGlob:GlobalVarsProvider) {

  
    this.base.GetRecettes().then(result => {
      this.listRecette = result;
      console.log(this.listRecette);
    })
    
  }
  
      
  onSearch(ev : any ){

    let val = ev.target.value;
    console.log("valeur recuperer dans la search bar " + val );
    console.log("taille de la liste recette : "+ this.listRecette.length);

    for (var i = 0 ; i < this.listRecette.length ; i++){
        for (var j = 0 ; j <  this.listRecette[i].motsCles.length ; j ++){
          console.log("taille de la liste recette : "+ this.listRecette.length);
          console.log("taille de la liste de mots clef : "+ this.listRecette[i]);

          console.log("mots clef " + this.listRecette[i].motsCles[j]);
          
          console.log(i + j);
        }
    }
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
    this.varGlob.setListeIngredientsSelectionner([]);
  }

  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
