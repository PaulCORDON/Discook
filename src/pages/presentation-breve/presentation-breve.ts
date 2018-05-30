import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  recette;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.recette = this.navParams.get("recette");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationBrevePage');
  }



  Editer(){
    this.navCtrl.push(`EditionRecettePage`,{recette : this.recette});
  }
  onClickParametre(){

    this.navCtrl.push('ParametresPage');
  
  }

  
  Voir(){
    this.navCtrl.push(`PresentationCompletePage`,{recette : this.recette});
  } 
  
  Commencer(){
    this.navCtrl.push(`ListeIngredientPage`,{recette : this.recette});
  }

}
