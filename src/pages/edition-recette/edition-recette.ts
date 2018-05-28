import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edition-recette',
  templateUrl: 'edition-recette.html',
})
export class EditionRecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditionRecettePage');
  }

  ouvrirLesParametres(){
    this.navCtrl.push(`ParametresPage`);
  }

  retour(){
    this.navCtrl.pop();
  }

  valider(){
    this.navCtrl.pop();
  }
}
