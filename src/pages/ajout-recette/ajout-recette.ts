import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import *as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';
import { Recette } from '../../metier/recette';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { Etape } from '../../metier/etape';
import { Ingredient } from '../../metier/ingredient';
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
  listeIngredients: Ingredient[];
  imgUrl: any;
  readonly TAG:String ='Ajout_Recette';
  reference: firebase.database.Reference;
  titre : string;
  recette : Recette;
  

  constructor(public navCtrl: NavController, public base : DatabaseProvider, public navParams: NavParams, private camera: Camera, private crop:Crop, private base64:Base64,public varGlob:GlobalVarsProvider ) {
    
    this.recette=new Recette([],"","","",0,"","",0,[],[]);

    /* Récupèration des valeurs dans BDD */
    const item : firebase.database.Reference = firebase.database().ref("Recette/1");
    item.on('value',PassSnapshot=>{
      this.titre  = PassSnapshot.val();
      
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
              this.recette.image = base64File;
              console.log(base64File);
            }, (err) => {
              console.log(err);
            });
          }, err => { }          
      );      
  }

  // Ajouter une recette à la BDD
  onClickAddRecette(){
    console.log(JSON.stringify(this.recette));
    //this.base.AddRecette(this.recette);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutRecettePage');
  }

  ionViewWillEnter(){
    this.recette.ingredients = this.varGlob.getListeIngredientsSelectionner();
  }

  OnClickAddIngredient(){
    
    this.base.GetAllIngredients().then((rep) => {
      let liste = this.recette.ingredients;
      let ing:any;
      for(ing in liste){
        console.log('suppression de ou du : ' + ing.nom);
        rep.splice(rep.indexOf(ing), 1);
      };
      this.listeIngredients = rep.sort((one:Ingredient, two:Ingredient) => (one.nom > two.nom ? 1 : -1));
      console.log(`getListeIngredients ok` + JSON.stringify(this.listeIngredients));
      this.navCtrl.push(`ListeAllIngredientsBddPage`,{listeIng:this.listeIngredients});
    })
  }

  OnClickAddEtape(){
    this.recette.etapes.push(new Etape(this.recette.etapes.length+1,"",[]));
  }

  supprIngredient(ing){
    console.log("supprIngredient : " + ing.nom);
    let index = this.recette.ingredients.indexOf(ing);
    this.recette.ingredients.splice(index,1);
    
    this.varGlob.setListeIngredientsSelectionner(this.recette.ingredients);
  }

  supprEtape(etape){
    this.recette.etapes.splice(this.recette.etapes.indexOf(etape),1);
  }
}
