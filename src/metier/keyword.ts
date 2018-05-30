
export class Keyword{
    categorie : string;
    mot : string[] = [];

    constructor(categorie : string, mot : string[]){
        this.categorie = categorie;
        this.mot = mot;
    }
}