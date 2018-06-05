import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recette } from '../../metier/recette';
import * as firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DatabaseProvider } from '../../providers/database/database';
import { Ingredient } from '../../metier/ingredient';
import { Etape } from '../../metier/etape';
import { Annotation } from '../../metier/annotation';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
listRecette : Recette [];

etape : Etape;
anno : Annotation;

  constructor(public navCtrl: NavController, public base : DatabaseProvider) {

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
       
    this.anno = new Annotation("c est moi","1","cette étape est la plus importante","5/06");
    this.etape = new Etape(1,"manger le chocolat",[this.anno]);

    base.PutEtape(this.etape);
         
     
    
    

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
  }

  onClickParametre()
  {
    console.log("Ouverture de la page des paramètres");
    this.navCtrl.push("ParametresPage");
  }

 

}
