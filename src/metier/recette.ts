import { Etape } from "./etape";
import { Ingredient } from "./ingredient";
import *as firebase from 'firebase';


export class Recette{
    categorie : string;

    keywords : string[] = [];
    nom : string;
    image : string;
    presentation : string;
    difficulte : number;    //entier sur 5 ou 10
    nbPers : number;    
    duree : number;     //nb de min pour la durée
    tpCuisson : number; //nb de min pour la cuisson
    etapes : Etape[] = [];
    ingredients : Ingredient[] = [];
    reference : firebase.database.Reference;
    
    constructor(){
        
    }

   creerRecette(){
        this.reference = firebase.database().ref('Recette/');
        this.reference.push().set({
            name: this.nom,
            presentation : this.presentation,
            image: this.image
        });
    }
}