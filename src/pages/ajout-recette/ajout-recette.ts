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

@IonicPage()
@Component({
  selector: 'page-ajout-recette',
  templateUrl: 'ajout-recette.html',
})
export class AjoutRecettePage {
  nbPers: number;
  imgUrl: any;
  readonly TAG: String = 'Ajout_Recette';
  reference: firebase.database.Reference;
  titre: string;
  recette: Recette;
  duree:number;
  tpCuis:number;

  constructor(public navCtrl: NavController, public base: DatabaseProvider, public navParams: NavParams, private camera: Camera, private crop: Crop, private base64: Base64, public varGlob: GlobalVarsProvider) {

    this.recette = this.navParams.get('recette');
    if(this.recette==undefined) this.recette = new Recette([], "", "", "", 0, "", "", 0, [], [],"");

    /* Récupèration des valeurs dans BDD */
    const item: firebase.database.Reference = firebase.database().ref("Recette/1");
    item.on('value', PassSnapshot => {
      this.titre = PassSnapshot.val();
    });
  }

  private openPhoto() {
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

        return this.crop.crop(fileUri, { quality: 100 });
      }, err => { }).then(path => {
        let tempo: any = path;
        this.base64.encodeFile(tempo).then((base64File: string) => {
          this.recette.image = base64File;
          console.log(base64File);
        }, (err) => {
          console.log(err);
        });
      }, err => { }
      );
  }

  private openGallery(){
    let cameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
     destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,     
      saveToPhotoAlbum: true,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri =>  this.recette.image = 'data:image/jpeg;base64,' + file_uri, 
      err => console.log(err));

      console.log(`${this.TAG} openGallery() FIN `);
  }



  // Ajouter une recette à la BDD
  onClickAddRecette() {
    this.recette.nbPers=this.nbPers;
    this.recette.tpCuisson=this.tpCuis+"";
    this.recette.duree=this.duree+"";
    console.log(JSON.stringify(this.recette));
    this.base.AddRecette(this.recette);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutRecettePage');
    this.tpCuis=0;
    this.duree=0;
    this.nbPers=0;
  }

  ionViewWillEnter() {
    this.recette.ingredients = this.varGlob.getListeIngredientsSelectionner();
  }

  OnClickAddIngredient() {
    let listeComplete: Ingredient[] = this.varGlob.getListeIngredientsComplete();
    let listeIngSelect: Ingredient[] = this.recette.ingredients;
    listeIngSelect.forEach(ing => {
      listeComplete.splice(listeComplete.indexOf(ing), 1);
    });
    this.navCtrl.push(`ListeAllIngredientsBddPage`, { listeIng: listeComplete });
  }

  OnClickAddEtape() {
    this.recette.etapes.push(new Etape(this.recette.etapes.length + 1, "", []));
  }

  supprIngredient(ing) {
    console.log("supprIngredient : " + ing.nom);
    let index = this.recette.ingredients.indexOf(ing);
    this.recette.ingredients.splice(index, 1);

    this.varGlob.setListeIngredientsSelectionner(this.recette.ingredients);
  }

  supprEtape(etape) {
    this.recette.etapes.splice(this.recette.etapes.indexOf(etape), 1);

    for (let i = 0; i < this.recette.etapes.length; i++) {
      this.recette.etapes[i].numero = i + 1;
    }
  }
  onClickStar(n: number) {
    this.recette.difficulte = n;
  }
  onClickAddTempsCuisson(n: number){
    if(n==-1){
      if(this.tpCuis>=1){
        this.tpCuis=this.tpCuis+n;
      }
    }
    else{
      if(this.tpCuis<=499){
        this.tpCuis=this.tpCuis+n;
      }
    }
    
  }
  onClickAddDuree(n: number){
    if(n==-1){
      if(this.duree>=1){
        this.duree=this.duree+n;
      }
    }
    else{
      if(this.duree<=499){
        this.duree=this.duree+n;
      }
    }
    
  }

  onClickAddPers(n: number){
    if(n==-1){
      if(this.nbPers>=1){
        this.nbPers=this.nbPers+n;
      }
    }  
    else{
      this.nbPers=this.nbPers+n;
    }  
  }

}
