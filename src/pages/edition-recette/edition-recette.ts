import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-edition-recette',
  templateUrl: 'edition-recette.html',
})
export class EditionRecettePage {
  pageTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditionRecettePage');
  }

  ouvrirLesParametres(){
    this.navCtrl.push(`ParametresPage`);
  }

  valider(){
    this.navCtrl.pop();
  }
}
