
export class utilisateur{
    pseudo : string;
    favoris : string[] = [];
    motDePasse : string;

    constructor(pseudo : string, motDePasse : string, favoris : string[]){
        this.pseudo = pseudo;
        this.motDePasse = motDePasse
        this.favoris = favoris;

        //console.log("/////Création utilisateur : " + pseudo + " (" + favoris + ")");
    }

    addFavoris(refRecette : string){
        this.favoris.push(refRecette)
    }
}