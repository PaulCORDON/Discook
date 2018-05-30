import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnotationRecettePage } from '../annotation-recette/annotation-recette';
import { EditionRecettePage } from '../edition-recette/edition-recette';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationCompletePage');
  }

  versAnnotation(){
    this.navCtrl.push(AnnotationRecettePage);
  }

  versEdition(){
    this.navCtrl.push(EditionRecettePage);
  }

  onClickParametre(){

    this.navCtrl.push('ParametresPage');
  
  }

}
