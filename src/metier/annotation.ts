
export class Annotation{

    pseudo:string;
    date:string;
    etape:string;
    com:string;

    constructor(pseudo : string, etape : string, commentaire : string){
        this.pseudo = pseudo;
        this.etape = etape;
        this.com = commentaire;
        let now = new Date();
        this.date = "" + now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
        console.log(this.pseudo + this.date + this.com);
    }
}