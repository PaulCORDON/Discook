
export class Annotation{

    pseudo:string;
    date:string;
    etape:string;
    com:string;

    constructor(pseudo : string, etape : string, commentaire : string, date : string){
        this.pseudo = pseudo;
        this.etape = etape;
        this.com = commentaire;
        this.date = date;
        if(date == null){
            this.date = this.GetNow();
        }
        console.log("/////Creation annotation par " + this.pseudo + " le " + this.date + " pour l'etape " + this.etape + " : " + this.com);
    }

    GetNow() : string{
        let now = new Date();
        return "" + now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    }
}