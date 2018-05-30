import { Keyword } from "./keyword";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";
import *as firebase from 'firebase';


export class Recette{
    
    keywords : Keyword[] = [];
    nom : string;
    image : string;
    presentation : string;
    difficulte : number;    //entier sur 5 ou 10
    nbPers : number;    
    duree : number;     //nb de min pour la durée
    tpCuisson : number; //nb de min pour la cuisson
    etapes : Etape[] = [];
    ingredients : Ingredient[] = [];

    reference: firebase.database.Reference;

  /*  constructor(keywords : Keyword[], nom : string, presentation : string, image : string, difficulte : number, duree : number, tpCuisson : number, nbPers : number, etapes : Etape[], ingredients : Ingredient[]){
        this.keywords = keywords;
        this.nom = nom;
        this.presentation = presentation;
        this.image = image;
        this.difficulte = difficulte;
        this.nbPers = nbPers;
        this.duree = duree;
        this.tpCuisson = tpCuisson;
        this.etapes = etapes;
        this.ingredients = ingredients;
    }*/

    creerRecette(){
        this.reference = firebase.database().ref('Recette/');
        this.reference.push().set({
            name: this.nom,
            presentation : this.presentation,
            image: this.image
        });
    }
}