import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Recette } from '../../metier/recette';
import { Etape } from '../../metier/etape';
import { Annotation } from '../../metier/annotation';
import { Ingredient } from '../../metier/ingredient';

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

GetAllIngredients(): Promise<Array<Ingredient>>{
  return new Promise<Array<Ingredient>>((resolve, reject) => {
    let listeIngredient = [];
    firebase.database().ref("Ingredient").on('value', itemSnapShot => {
      itemSnapShot.forEach(item=> {
        let ingredient = new Ingredient(item.child("nom").val(),item.child("image").val(),null,null,item.key);
        listeIngredient.push(ingredient);
        })
    });
    resolve (listeIngredient);
  });
}

  GetRecettes() : Promise<Array<Recette>>{
    return new Promise<Array<Recette>>((resolve, reject) => {
      let listeRecette = [];
      firebase.database().ref("Recette").on('value', itemSnapShot => {
        itemSnapShot.forEach(item=> {
          this.GetEtapes(item.ref).then(etapes => {
            this.GetIngredients(item.ref).then(ingredients => {
              this.GetMotsCles(item.ref).then(motsCles => {
                let recette = new Recette(motsCles,
                  item.child('name').val(),
                  item.child('presentation').val(),
                  item.child('image').val(),
                  item.child('difficulte').val(),
                  item.child('duree_prepa').val(),
                  item.child('duree_cuisson').val(),
                  item.child('nb_personnes').val(),
                  etapes,
                  ingredients
                ); 
                listeRecette.push(recette);
              })
            })
          })
          return false;
        });
      });
      resolve (listeRecette);
    });
  }


  AddRecette(recette : Recette){
    let reference = firebase.database().ref('Recette/');
    let recetteRef = reference.push()
    recetteRef.set({
      difficulte:recette.difficulte,
      duree_cuisson:recette.tpCuisson,
      duree_prepa:recette.duree,
      nb_personnes:recette.nbPers,
      etapes:"",
      image:recette.image,
      ingredients:"",
      mots_cles:"",
      name:recette.nom,
      presentation:recette.presentation
    });

    recette.ingredients.forEach(elem => {
      recetteRef.child("ingredients").push().set({
        quantite:elem.quantite,
        ref:elem.id,
        unite:elem.unite
      })
    });

    recette.etapes.forEach(elem => {
      let id = PutEtape(elem);
      recetteRef.child("etapes").push().set({
        ref:id
      });
    });
    
  }

  GetIngredients(ref : firebase.database.Reference){
    return new Promise<Array<Ingredient>>((resolve, reject) => {
      let listIngredients = [];
      ref.child('ingredients').on('value', res => {
        res.forEach(recetteIngredient => {
          let quantite = recetteIngredient.child('quantite').val();
          let unite = recetteIngredient.child('unite').val();
          firebase.database().ref("Ingredient/" + recetteIngredient.child('ref').val()).on('value', ingredient => {
            listIngredients.push(new Ingredient(ingredient.child('nom').val(),ingredient.child('image').val(), +quantite, unite,recetteIngredient.key))
          })
          return false;
        })
      })
      resolve(listIngredients);
    })
  }

  GetAnnos(ref : firebase.database.Reference) : Promise<Array<Annotation>>{
    return new Promise<Array<Annotation>>((resolve, reject) => {
      let listAnnos = [];
      let currentEtape;
      ref.child('numero').on('value', res => {currentEtape = res.val()})
      ref.child('annotations').on('value', res => {
        res.forEach(refAnno => {
          firebase.database().ref("Annotation/"+ refAnno.val()).on('value', anno => {
            console.log(anno.val());
            listAnnos.push(new Annotation(anno.child('pseudo').val(),currentEtape,anno.child('commentaire').val(),anno.child('date').val()));
          })
          return false;
        })
      })
      resolve(listAnnos);
    })
  }

  GetEtapes(ref : firebase.database.Reference ) : Promise<Array<Etape>>{
    return new Promise<Array<Etape>>((resolve, reject) => {
      let listEtapes = [];
      ref.child('etapes').on('value', res => {
        res.forEach(item => {
          firebase.database().ref("Etape/" + item.val()).on('value', eta =>{
            this.GetAnnos(eta.ref).then(result => {
              let etape = new Etape(eta.child('numero').val(),eta.child('texte').val(), result);
              listEtapes.push(etape);
            });
          })
          return false;
        })
      })
      resolve(listEtapes);
    })
  }

  GetMotsCles(ref : firebase.database.Reference) : Promise<Array<string>>{
    return new Promise<Array<string>>((resolve,reject) => {
      let listMots = [];
      ref.child('mots_cles').on('value', res => {
        res.forEach(item => {
          listMots.push(item.val());
          return false;
        })
      })
      resolve(listMots);
    })
  }
}
