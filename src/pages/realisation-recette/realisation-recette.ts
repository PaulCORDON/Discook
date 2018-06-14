import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import { Etape } from '../../metier/etape';

/**
 * Generated class for the RealisationRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realisation-recette',
  templateUrl: 'realisation-recette.html',
})
export class RealisationRecettePage {
  recette : Recette;
  etape : Etape;

  debut=true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recette =  this.navParams.get("recette");
    console.log(JSON.stringify(this.recette.etapes))
    this.etape = this.recette.etapes[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationRecettePage');
  }

  onClickEtapePrecedente(){
    this.etape = this.recette.etapes[this.recette.etapes.indexOf(this.etape)-1];
  }

  onClickEtapeSuivante(){
    if(this.debut) {
      if(this.etape==undefined) this.navCtrl.pop();
      else this.debut=false;
    }
    else{
      let newEtape = this.recette.etapes[this.recette.etapes.indexOf(this.etape)+1];
      if(newEtape==undefined) this.navCtrl.pop();
      else this.etape = newEtape;
    }
    
  }
}
