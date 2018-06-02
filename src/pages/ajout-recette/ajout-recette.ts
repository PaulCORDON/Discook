import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AjoutRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-recette',
  templateUrl: 'ajout-recette.html',
})
export class AjoutRecettePage {
  reference: firebase.database.Reference;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    /* REQUETE TEST AJOUT BDD */
    this.reference = firebase.database().ref('Recette/'+ 1);
    this.reference.set({
        id :1,
        name : "Cookie",
        image : "Image de Cookie",
        presentation: " Voici la super recette de cookies de sa grand-mère la tchouin ",
        difficulte: 2,
        nb_personnes: 4,
        duree_prepa: "15 min",
        duree_cuisson: "20 min"
      // Etapes
      // Ingredients

    });
  }

  private openPhoto(){
     return this.camera.getPicture(
      {
        destinationType: this.camera.DestinationType.FILE_URI,
        mediaType: this.camera.MediaType.ALLMEDIA,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true
      }
    ).then(
        fileUri => {
          
          return this.crop.crop(fileUri, {quality:100});
        }, err => { } ).then(path => { 
          let tempo : any = path;
            this.base64.encodeFile(tempo).then((base64File: string) => {
              this.imageSrc = base64File;
              console.log(base64File);
            }, (err) => {
              console.log(err);
            });
          }, err => { }          
      );      
  }

  // Ajouter une recette à la BDD
  onClickAddRecette(titre:string, presentation: string){
    this.recette.nom =titre;
    this.recette.image = this.imageSrc;
    this.recette.presentation = presentation;
    this.recette.creerRecette();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutRecettePage');
  }

  AddIngredient(){
    this.navCtrl.push('ListeIngredientPage');
  }

}
