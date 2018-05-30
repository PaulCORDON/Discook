
export class utilisateur{
    pseudo : string;
    favoris : string[] = [];

    constructor(pseudo : string, favoris : string[]){
        this.pseudo = pseudo;
        this.favoris = favoris;
    }
}