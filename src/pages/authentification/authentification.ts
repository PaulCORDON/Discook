import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public base : DatabaseProvider, public global : GlobalVarsProvider, public tstCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');
  }


  connexion(){
    let valide = false
    this.base.GetUtilisateur(this.pseudo, this.motDePasse).then(user => {
      if(user.pseudo == this.pseudo && user.motDePasse == this.motDePasse){
        this.global.setCompte(user)
        this.navCtrl.setRoot(HomePage);
      }else{
        let toastAlert = this.tstCtrl.create({
          message : "Ce compte n'existe pas",
          duration : 3000
        })
        toastAlert.present()
      }
    }).catch(()=> {
      let toastAlert = this.tstCtrl.create({
        message : "Ce compte n'existe pas",
        duration : 3000
      })
      toastAlert.present()
    })
    


  }
  inscription()
  {
    this.navCtrl.push("InscriptionPage");
  }
}
