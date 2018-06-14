import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from '../../providers/database/database';
import { utilisateur } from '../../metier/utilisateur';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

/**
 * Generated class for the AuthentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html',
})
export class AuthentificationPage {

  pseudo : string
  motDePasse : string

  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider, public global : GlobalVarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');
  }


  connexion(){
    let valide = false
    console.log(this.pseudo+this.motDePasse)
    this.base.GetUtilisateur(this.pseudo, this.motDePasse).then(user => {
      if(user.pseudo == this.pseudo && user.motDePasse == this.motDePasse){
        this.global.setCompte(user)
        this.navCtrl.setRoot(HomePage);
      }else{
        console.log("not connected")
      }
    })
    


  }
  inscription()
  {
    this.navCtrl.push("InscriptionPage");
  }
}
