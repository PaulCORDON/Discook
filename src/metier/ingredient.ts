
export class Ingredient{
    nom:string;
    image:string;
    quantite : number;
    unite : string;

    constructor(nom : string, image : string , quantite : number, unite : string){
        this.nom = nom;
        this.image = image;
        this.quantite = quantite;
        this.unite = unite;

        console.log("/////Création Ingredient " + nom + " (visuel : " + image + ") pour " + quantite + unite);
    }
}