import { Keyword } from "./keyword";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";

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

    constructor(keywords : Keyword[], nom : string, presentation : string, image : string, difficulte : number, duree : number, tpCuisson : number, nbPers : number, etapes : Etape[], ingredients : Ingredient[]){
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

        console.log("/////Création recette : " + nom + ", " + presentation + " pour " + nbPers + " personnes\n    difficulte : " + difficulte + "\n     duree de préparation : " + duree + "\ntemps de cuisson : " + tpCuisson);
    }
}