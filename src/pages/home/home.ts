import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private onClickRecette()
  {
    console.log("Ouverture de la page de la présentation brève de la recette");
    this.navCtrl.push("PresentationBrevePage");
  }

  private onClickAjoutRecette()
  {
    console.log("Ouverture de la page de l'ajout d'une recette");
    this.navCtrl.push("page-ajout-recette");
  }

  private  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
