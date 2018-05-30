import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annotation } from '../../metier/annotation';

/**
 * Fait par Antoine
 */

@IonicPage()
@Component({
  selector: 'page-annotation-recette',
  templateUrl: 'annotation-recette.html',
})
export class AnnotationRecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnotationRecettePage');
  }

  poster(pseudo : string, etape : string, com : string){
    console.log("poster " + com + " par " + pseudo + " pour l'étape " + etape);
    new Annotation(pseudo,etape,com);
  }

  ouvrirLesParametres(){
    this.navCtrl.push(`ParametresPage`);
  }
}
