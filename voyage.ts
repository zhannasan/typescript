class Sejour{
    constructor(private _nom:string,private _prix:number){

    }
    get nom():string{
        return this._nom;
    }
    get prix():number{
        return this._prix;
    }
}

class SejourService{
    private _sejour:Sejour[]
    constructor(){
        this._sejour = [new Sejour('Grenoble', 100), 
                                new Sejour('Lyon', 120), new Sejour('Toulouse', 110)];
    }
    findByName(nom:string):Sejour|void{
        for (const sej of this._sejour) {
            if (sej.nom===nom) {
                return sej;
            } 
        }
    }
}

const sejourService = new SejourService();
console.log(sejourService.findByName('Lyon'));
