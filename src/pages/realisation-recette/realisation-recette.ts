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
  etape : Etape [];
  i : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.recette =  this.navParams.get("recette");
    this.etape = this.recette.etapes;
    console.log(this.etape[0].texte);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationRecettePage');
  }

  onClickEtapePrecedente(){
    if (this.i > 0 ){
      this.i = this.i-1;

    }

  }

  onClickEtapeSuivante(){
    

    if (this.i < this.etape.length - 1 ){
      this.i = this.i+1;
      

    }

  }

}
