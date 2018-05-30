import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import * as firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
listRecette : Recette [];
  constructor(public navCtrl: NavController, public afd : AngularFireDatabase) {

    /*const ref : firebase.database.Reference = firebase.database().ref("Recette");
    this.listRecette = [];
    ref.on('value', itemSnapShot => {
      itemSnapShot.forEach(itemSnap=> {
        this.listRecette.push(itemSnap.val());
        return false;
      });
    }); 
    console.log("test recup recette "+ this.listRecette);*/

    
  

      let afList:AngularFireList<Recette> = this.afd.list<Recette>('/Recette');
      afList.snapshotChanges()
         .map ( changes => {
            return changes.map (c => ({...c.payload.val()}));
         })
         .subscribe(recette => {
            console.log(JSON.stringify(recette));
            this.listRecette = recette;
         });
    
       
    
         
     
    
    

  }

  onClickRecette()
  {
    console.log("Ouverture de la page de la présentation brève de la recette");
    this.navCtrl.push("PresentationBrevePage");
  }

  onClickAjoutRecette()
  {
    console.log("Ouverture de la page de l'ajout d'une recette");
    this.navCtrl.push("AjoutRecettePage");
  }

  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
