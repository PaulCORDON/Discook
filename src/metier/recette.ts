import { Keyword } from "./keyword";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";

export class Recette{
    
    keywords : Keyword[];
    nom : string;
    image : string;
    presentation : string;
    difficulte : number;    //entier sur 5 ou 10
    nbPers : number;    
    duree : number;     //nb de min pour la durée
    tpCuisson : number; //nb de min pour la cuisson
    etapes : Etape[];
    ingredients : Ingredient[];

    constructor(keywords : Keyword[], nom : string, presentation : string, image : string, difficulte : number, duree : number){

    }
}