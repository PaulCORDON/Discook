import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Recette } from '../../metier/recette';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }

  GetRecettes() : Promise<Array<Recette>>{
    return new Promise<Array<Recette>>((resolve, reject) =>{
      let listeRecette = [];
      firebase.database().ref("Recette").on('value', itemSnapShot => {
        itemSnapShot.forEach(itemSnap=> {
          //let recette = new Recette();
          listeRecette.push(itemSnap.val());
          console.log("test recup recette "+ listeRecette.length);
          return false;
        });
      });
      resolve (listeRecette);
    });
  }

  AddRecette(recette : Recette){
    let reference = firebase.database().ref('Recette/');
    reference.push().set({
      id :1,
      name : "Cookie",
      image : "Image de Cookie",
      presentation: " Voici la super recette de cookies de ma grand-mère ",
      difficulte: 2,
      nb_personnes: 4,
      duree_prepa: "15 min",
      duree_cuisson: "20 min"
    // Etapes
    // Ingredients
    });
  }


}
