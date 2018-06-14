import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Recette } from '../../metier/recette';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

/**
 * Generated class for the PresentationBrevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentation-breve',
  templateUrl: 'presentation-breve.html',
})
export class PresentationBrevePage {

  recette : Recette;
  tempsTot;
  fav = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider, public global : GlobalVarsProvider) {
this.recette = this.navParams.get("recette");

var x = this.recette.duree;
var y = +x;
var q = this.recette.tpCuisson;
var w = +q;
this.tempsTot = y+w;
console.log("temps total : " + this.tempsTot)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationBrevePage');
    this.base.GetRecettes()
  }



  Editer(){
    this.navCtrl.push(`AjoutRecettePage`,{recette : this.recette});
  }

  
  Voir(){
    this.navCtrl.push(`PresentationCompletePage`,{recette : this.recette});
  } 
  
  Commencer(){
    this.navCtrl.push(`RealisationRecettePage`,{recette : this.recette});
  }

  addFav(){
    
    if(this.fav == false){
      this.global.getCompte().addFavoris(this.recette.id);
      this.base.PutUtilisateur(this.global.getCompte());
      console.log("iddddddd" + this.recette.id)
      this.fav = true;
    }
    else{
      this.fav = false;
    }
    
  }

}
