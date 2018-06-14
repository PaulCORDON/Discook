import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annotation } from '../../metier/annotation';
import { DatabaseProvider } from '../../providers/database/database';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

/**
 * Fait par Antoine
 */

@IonicPage()
@Component({
  selector: 'page-annotation-recette',
  templateUrl: 'annotation-recette.html',
})
export class AnnotationRecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider, public global : GlobalVarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnotationRecettePage');
  }

  poster(etape : string, com : string){
    let pseudo = this.global.getCompte().pseudo
    console.log("poster " + com + " par " + pseudo + " pour l'étape " + etape);
    new Annotation(pseudo,etape,com, null);
  }


  onClickParametre(){

    this.navCtrl.push('ParametresPage');
  
  }
}
