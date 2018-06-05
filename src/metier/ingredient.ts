
export class Ingredient{
    nom:string;
    image:string;
    quantite : number;
    unite : string;
    id: any;

    constructor(nom : string, image : string , quantite : number, unite : string, id:any){
        this.nom = nom;
        this.image = image;
        this.quantite = quantite;
        this.unite = unite;
        this.id = id;


        console.log("/////Création Ingredient " + nom + " (visuel : " + image + ") pour " + quantite + unite);
    }
}