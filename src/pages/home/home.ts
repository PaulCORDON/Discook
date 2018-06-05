import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import * as firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DatabaseProvider } from '../../providers/database/database';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
listRecette : Recette [];
  constructor(public navCtrl: NavController, public base : DatabaseProvider,public varGlob:GlobalVarsProvider) {

    const ref : firebase.database.Reference = firebase.database().ref("Recette");
    this.listRecette = [];
    ref.on('value', itemSnapShot => {
      itemSnapShot.forEach(itemSnap=> {
        this.listRecette.push(itemSnap.val());
        return false;
      });
    }); 
    console.log("test recup recette "+ this.listRecette);

    
  
/*
      let afList:AngularFireList<Recette> = this.afd.list<Recette>('/Recette');
      afList.snapshotChanges()
         .map ( changes => {
            return changes.map (c => ({...c.payload.val()}));
         })
         .subscribe(recette => {
            console.log(JSON.stringify(recette));
            this.listRecette = recette;
         });
   */ 
       
    
         
     
    
    

  }

  onClickRecette(recette)
  {
    console.log("Ouverture de la page de la présentation brève de la recette");
    this.navCtrl.push("PresentationBrevePage",{recette : recette});
  }

  onClickAjoutRecette()
  {
    console.log("Ouverture de la page de l'ajout d'une recette");
    this.navCtrl.push("AjoutRecettePage");
    this.varGlob.setListeIngredientsSelectionner([]);
  }

  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
