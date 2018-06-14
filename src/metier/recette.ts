import { Etape } from "./etape";
import { Ingredient } from "./ingredient";

export class Recette{
    
    motsCles : string[] = [];
    nom : string;
    image : string;
    presentation : string;
    difficulte : number;    //entier sur 5 ou 10
    nbPers : number;    
    duree : string;
    
    tpCuisson : string;
    etapes : Etape[] = [];
    ingredients : Ingredient[] = [];
    id :string;
    
        

    constructor(motsCles : string[], nom : string, presentation : string, image : string, difficulte : number, duree : string, tpCuisson : string, nbPers : number, etapes : Etape[], ingredients : Ingredient[], id : string){
        this.motsCles = motsCles;
        this.nom = nom;
        this.presentation = presentation;
        this.image = image;
        this.difficulte = difficulte;
        this.nbPers = nbPers;
        this.duree = duree;
        this.tpCuisson = tpCuisson;
        this.etapes = etapes;
        this.ingredients = ingredients;
        this.id = id
        //console.log("/////Création recette : " + nom + ", " + presentation + " pour " + nbPers + " personnes, difficulte : " + difficulte + ", duree de préparation : " + duree + ", temps de cuisson : " + tpCuisson);
    }
}