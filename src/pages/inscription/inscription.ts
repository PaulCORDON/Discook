import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from '../../providers/database/database';
import { utilisateur } from '../../metier/utilisateur';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {

  pseudo : string
  motDePasse : string

  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }

  connexion(){

    this.base.PutUtilisateur(new utilisateur(this.pseudo,this.motDePasse,[],""))
    this.navCtrl.pop()

  }

}
