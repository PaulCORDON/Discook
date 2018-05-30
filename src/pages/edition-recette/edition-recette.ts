import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edition-recette',
  templateUrl: 'edition-recette.html',
})
export class EditionRecettePage {
  pageTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditionRecettePage');
  }

  onClickParametre(){
    this.navCtrl.push(`ParametresPage`);
  }

  valider(){
    this.navCtrl.pop();
  }
}
