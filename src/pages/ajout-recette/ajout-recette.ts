import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';
import { Recette } from '../../metier/recette';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64';
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
  imgUrl: any;
  readonly TAG:String ='Ajout_Recette';
  reference: firebase.database.Reference;
  titre : string;
  imageSrc: string;
  recette : Recette;
  // listIngredients: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private crop:Crop, private base64:Base64 ) {

    this.recette = new Recette();

    /* REQUETE TEST AJOUT BDD */
    this.reference = firebase.database().ref('Rsecette/'+ 1);
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

    /* Récupèration des valeurs dans BDD */
    const item : firebase.database.Reference = firebase.database().ref("Recette/1");
    item.on('value',PassSnapshot=>{
      this.titre  = PassSnapshot.val();
      
    });
  }

  private openPhoto(){
  /*  console.log(`${this.TAG} openGallery() `);
    let cameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
     // destinationType: this.camera.DestinationType.FILE_URI,
     destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,     
      saveToPhotoAlbum: true,
      
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri =>  this.imageSrc = 'data:image/jpeg;base64,'+ file_uri, 
      err => console.log(err)) ;

      console.log(`${this.TAG} openGallery() FIN `);*/
      

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
              this.imgUrl = base64File;
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
