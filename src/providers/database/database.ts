import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Recette } from '../../metier/recette';
import { Etape } from '../../metier/etape';
import { Annotation } from '../../metier/annotation';
import { Ingredient } from '../../metier/ingredient';
import { ThenableReference } from '@firebase/database-types';
import { forEach } from '@firebase/util';
import { utilisateur } from '../../metier/utilisateur';

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

  GetAllIngredients(): Promise<Array<Ingredient>> {
    return new Promise<Array<Ingredient>>((resolve, reject) => {
      let listeIngredient:Array<Ingredient> = [];
      
      firebase.database().ref("Ingredient").on('value', itemSnapShot => {
        itemSnapShot.forEach(item => {
          let ingredient = new Ingredient(item.child("nom").val(), item.child("image").val(), null, null, item.key);
          listeIngredient.push(ingredient);
          listeIngredient.sort((one:Ingredient, two:Ingredient) => (one.nom > two.nom ? 1 : -1));
        })
      });
      resolve(listeIngredient);
    });
  }

  GetRecettes(): Promise<Array<Recette>> {
    return new Promise<Array<Recette>>((resolve, reject) => {
      let listeRecette = [];
      firebase.database().ref("Recette").on('value', itemSnapShot => {
        itemSnapShot.forEach(item => {
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

      resolve(listeRecette);
    });
  }


  AddRecette(recette: Recette) {
    let reference = firebase.database().ref('Recette/');
    let recetteRef = reference.push()
    recetteRef.set({
      difficulte: recette.difficulte,
      duree_cuisson: recette.tpCuisson,
      duree_prepa: recette.duree,
      nb_personnes: recette.nbPers,
      image: recette.image,
      mots_cles: "",
      name: recette.nom,
      presentation: recette.presentation
    });

    recette.ingredients.forEach(elem => {
      recetteRef.child("ingredients").push().set({
        quantite: elem.quantite,
        ref: elem.id,
        unite: elem.unite
      })
    });

    recette.etapes.forEach(elem => {
      let id = this.PutEtape(elem);
      recetteRef.child("etapes").push().set({
        ref: id
      });
    });

  }

  GetIngredients(ref: firebase.database.Reference) {
    return new Promise<Array<Ingredient>>((resolve, reject) => {
      let listIngredients = [];
      ref.child('ingredients').on('value', res => {
        res.forEach(recetteIngredient => {
          let quantite = recetteIngredient.child('quantite').val();
          let unite = recetteIngredient.child('unite').val();
          firebase.database().ref("Ingredient/" + recetteIngredient.child('ref').val()).on('value', ingredient => {
            listIngredients.push(new Ingredient(ingredient.child('nom').val(), ingredient.child('image').val(), +quantite, unite, recetteIngredient.key))
          })
          return false;
        })
      })
      resolve(listIngredients);
    })
  }

  GetAnnos(ref: firebase.database.Reference): Promise<Array<Annotation>> {
    return new Promise<Array<Annotation>>((resolve, reject) => {
      let listAnnos = [];
      let currentEtape;
      ref.child('numero').on('value', res => { currentEtape = res.val() })
      ref.child('annotations').on('value', res => {
        res.forEach(refAnno => {
          firebase.database().ref("Annotation/" + refAnno.val()).on('value', anno => {
            console.log(anno.val());
            listAnnos.push(new Annotation(anno.child('pseudo').val(), currentEtape, anno.child('commentaire').val(), anno.child('date').val()));
          })
          return false;
        })
      })
      resolve(listAnnos);
    })
  }

  GetEtapes(ref: firebase.database.Reference): Promise<Array<Etape>> {
    return new Promise<Array<Etape>>((resolve, reject) => {
      let listEtapes = [];
      ref.child('etapes').on('value', res => {
        res.forEach(item => {

          firebase.database().ref("Etape/" + item.child('ref').val()).on('value', eta => {
            console.log(eta.val())
            this.GetAnnos(eta.ref).then(result => {
              console.log(result)
              let etape = new Etape(eta.child('numero').val(), eta.child('texte').val(), result);
              console.log(etape)
              listEtapes.push(etape);
            });
          })
          return false;
        })
      })
      resolve(listEtapes);
    })
  }

  GetMotsCles(ref: firebase.database.Reference): Promise<Array<string>> {
    return new Promise<Array<string>>((resolve, reject) => {
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
  /*Ajout d'un nouvel ingredient dans la base de donnée, cette fonction renvoie la référence dans la base de donnée du nouvel ingredient */
  PutNewIngredient(ingredient: Ingredient) {
    let reference = firebase.database().ref('Ingredient/');
    let ref = reference.push();
    ref.set({
      nom: ingredient.nom,
      image: ingredient.image
    });
    console.log("la reference du nouvelle ingredient : " + ref.key);
    return (ref.key);
  }

  PutEtape(etape: Etape) {
    let reference = firebase.database().ref('Etape');
    let ref = reference.push();
    ref.set({
      numero: etape.numero,
      // image : etape.image;
      texte: etape.texte

    });

    etape.annotations.forEach(item => {
      let reference = firebase.database().ref('Etape/' + ref.key + '/annotations');
      let refAnno = reference.push();
      refAnno.set({
        reference: refAnno.key
      });
      this.PutAnnotation(refAnno, item);
    }
    )
    return (ref.key);
  }

  PutAnnotation(ref: ThenableReference, annotation: Annotation) {
    let reference = firebase.database().ref('Annotation/' + ref.key);
    reference.set({
      commentaire: annotation.com,
      date: annotation.date,
      pseudo: annotation.pseudo
    });
    return (ref.key);
  }

  PutUtilisateur(user : utilisateur){
    let reference = firebase.database().ref('Client')
    let ref = reference.push()
    console.log(user.pseudo + " " + user.motDePasse)
    ref.set({
      motDePasse : user.motDePasse,
      pseudo : user.pseudo
    })
    user.favoris.forEach(item => {
      let itemref = ref.child('favoris').push()
      itemref.set({
        fav:item
      })
    })
  }

  GetUtilisateur(pseudo : string, motDePasse : string) : Promise<utilisateur>{
    return new Promise<utilisateur>((resolve, reject) => {
      let reference = firebase.database().ref('Client').orderByChild('pseudo').once('value').then(res => {
        let list = []
        res.forEach(item => {
          if(item.child('pseudo').val()==pseudo && item.child('motDePasse').val()==motDePasse){
            console.log("trouvé")
            let user = new utilisateur(item.child('pseudo').val(), item.child('motDePasse').val() ,list)
            resolve(user)
          }
        })
        reject("not found")
      })
    })
  }
}
