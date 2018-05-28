import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutRecettePage } from '../ajout-recette/ajout-recette';

/**
 * Generated class for the ParametresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  isListeDefilable:boolean=true;
  isLectActive:boolean=true;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');
  }


  onClickAjouterRecette(){
    this.navCtrl.push(`AjoutRecettePage`);
   
  }
}
