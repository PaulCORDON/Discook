import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnotationRecettePage } from '../annotation-recette/annotation-recette';
import { EditionRecettePage } from '../edition-recette/edition-recette';
import { Recette } from '../../metier/recette';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the PresentationCompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentation-complete',
  templateUrl: 'presentation-complete.html',
})
export class PresentationCompletePage {
 recette:Recette;
  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider) {
    this.recette=this.navParams.get("recette");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationCompletePage');
  }

  versAnnotation(){
    this.navCtrl.push(AnnotationRecettePage);
  }

  versEdition(){
    this.navCtrl.push(`AjoutRecettePage`,{recette : this.recette});
  }

}
