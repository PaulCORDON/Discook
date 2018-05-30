import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annotation } from '../../metier/annotation';

/**
 * Generated class for the AnnotationRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
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

  onClickParametre(){
    this.navCtrl.push(`ParametresPage`);
  }
}
