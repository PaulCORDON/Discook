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
import { DEFAULT_PACKAGE_URL_PROVIDER } from '@angular/platform-browser-dynamic/src/compiler_factory';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listRecette: Recette[];
  listRecetteRecherche: Recette[] = [];
  etape: Etape;
  anno: Annotation;
  recherche: boolean = false; //boolean qui sert a savoir si on a fait une recherche pour l'affichage

  constructor(public navCtrl: NavController, public base: DatabaseProvider, public varGlob: GlobalVarsProvider) {

    this.base.GetRecettes().then(result => {
      this.listRecette = result;
    })
  }

  onSearch(ev: any) {
    this.listRecetteRecherche.forEach(element => {
      this.listRecetteRecherche.pop();
    });

    let val = ev.target.value;
    let motcle: string;
    let verif:boolean=false;  //boolean qui permet de savoir si la recette a ete ajoutée pour eviter de lajouter plusieurs fois

    if (val == "") {
      this.recherche = false;
    }

    else {
      console.log("valeur recuperer dans la search bar " + val);
      console.log("taille de la liste recette : " + this.listRecette.length);

      for (var i = 0; i < this.listRecette.length; i++) {
        verif=false;

        if (this.listRecette[i].nom==val && verif==false) {
          verif=true;
          this.listRecetteRecherche.push(this.listRecette[i]);
          this.recherche = true;
        }

        for (var j = 0; j < this.listRecette[i].motsCles.length; j++) {

          //ici on regarde si la valeur recherchee se trouve dans les mots clés de la base
          if (this.listRecette[i].motsCles[j].toLowerCase().lastIndexOf(val.toLowerCase()) != -1 && verif==false) {
            console.log("mots clef test!" + this.listRecette[i].motsCles[j]);
            this.listRecetteRecherche.push(this.listRecette[i]);
            this.recherche = true;
            verif=true;
          }
        }
      }
      console.log("test:: " + this.listRecetteRecherche);
    }
  }

  onClickRecette(recette) {
    console.log("Ouverture de la page de la présentation brève de la recette");
    this.navCtrl.push("PresentationBrevePage", { recette: recette });
  }

  onClickAjoutRecette() {
    console.log("Ouverture de la page de l'ajout d'une recette");
    this.navCtrl.push("AjoutRecettePage");
    //this.varGlob.setListeIngredientsSelectionner([]);
  }

  onClickParametre() {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }
}
