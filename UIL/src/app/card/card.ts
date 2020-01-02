
export class Card  {
    public cardpic:string;
    public name:string;
    constructor(_cardpic:string, _name:string){
        this.cardpic="../../assets/pictures/all cards/"+_cardpic+".png";
        this.name = _name;
    }
   
       
}