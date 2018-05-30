import { Annotation } from "./annotation";

export class Etape{
    numero:number;
    texte:string;
    annotations : Annotation[] = [];

    constructor(numero : number, texte : string, annotations : Annotation[]){
        this.numero = numero;
        this.texte = texte;
        this.annotations = annotations;
        console.log("/////Création etape " + this.numero + " : " + this.texte + " (" + this.annotations + ")");
    }
}