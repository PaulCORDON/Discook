import { DatabaseProvider } from "../providers/database/database";

export class utilisateur{
    pseudo : string;
    favoris : string[] = [];
    motDePasse : string;
    id : string;

    constructor(pseudo : string, motDePasse : string, favoris : string[], id : string){
        this.id = id
        this.pseudo = pseudo;
        this.motDePasse = motDePasse
        this.favoris = favoris;

        //console.log("/////Création utilisateur : " + pseudo + " (" + favoris + ")");
    }

    addFavoris(refRecette : string){
        this.favoris.push(refRecette)
        
    }
}