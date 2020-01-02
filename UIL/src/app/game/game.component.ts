import {
  Component,
  OnInit,
  NgModule,
  Input,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";
import { GameService } from "../shared/services/game.service";
import { GeneralGameInfoModel } from "../shared/models/generalgamegame-info.model";
import { GameOnRunModel } from "../shared/models/gameonruninfo.model";
import { CardComponent } from "../card/card.component";
import { CardValue } from "../shared/models/CardValue";
import { Subject, Observable } from "rxjs";
import { Card } from "../card/card";
@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  @ViewChild("cardsContainer", { read: ViewContainerRef }) container;
  @ViewChild("usedCard", { read: ViewContainerRef }) usedCardcontainer;
  @ViewChild("CardTurn", { read: ViewContainerRef }) CardTurncontainer;

  componentRef: ComponentRef<CardComponent>;

  @ViewChild(Card) FirstPlayerFrontRight: Card;
  @ViewChild(Card) FirstPlayerFrontLeft: Card;
  @ViewChild(Card) FirstPlayerBackRight: Card;
  @ViewChild(Card) FirstPlayerBackLeft: Card;

  FirstPlayerFrontRightEvent: Subject<void> = new Subject<void>();
  FirstPlayerFrontLeftEvent: Subject<void> = new Subject<void>();
  FirstPlayerBackRightEvent: Subject<void> = new Subject<void>();
  FirstPlayerBackLeftEvent: Subject<void> = new Subject<void>();
  UsedCardEvent: Subject<void> = new Subject<void>();
  CardTurnEvent: Subject<void> = new Subject<void>();

  public myGame: GeneralGameInfoModel;
  public gameRun: GameOnRunModel;
  // public cardvalue:CardValue;
  constructor(
    private gameservice: GameService,
    private resolver: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {}
  status: boolean = false;
  state: string = "card-back";
  emitEventToChild(subject: Subject<void>) {
    subject.next();
  }
  ngOnInit() {
    this.gameservice.startnewgame().subscribe(
      res => {
        this.myGame = res;
        this.setLocationCards();
        this.show2card();
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
  createCardComponent(card: Card, event: Observable<void>, container: any) {
    const factory: ComponentFactory<CardComponent> = this.resolver.resolveComponentFactory(
      CardComponent
    );

    this.componentRef = container.createComponent(factory);
    this.componentRef.instance.card = card;
    this.componentRef.instance.events = event;
  }

  setLocationCards() {
    console.log("card value", CardValue);
    // this.gameRun.GameId=this.myGame.cardTable.GameId;
    console.log("cardTable", this.myGame.cardTable);
    let arrayNames = [];
    for (let value = 3; value <= 10; value++) {
      let keyArr = Object.keys(this.myGame.cardTable);
      let key = "";
      for (let i = 0; i < keyArr.length; i++) {
        if (this.myGame.cardTable[keyArr[i]] == value) {
          key = keyArr[i];
          arrayNames.push(key);
          break;
        }
      }
      console.log(key, value);
    }
    this.gameRun = {
      GameId: this.myGame.cardTable.GameId,
      FirstPlayerFrontRight: <number>(<any>CardValue[arrayNames[0]]),
      FirstPlayerFrontLeft: <number>(<any>CardValue[arrayNames[1]]),
      FirstPlayerBackRight: <number>(<any>CardValue[arrayNames[2]]),
      FirstPlayerBackLeft: <number>(<any>CardValue[arrayNames[3]]),
      SecondPlayerFrontRight: <number>(<any>CardValue[arrayNames[4]]),
      SecondPlayerFrontLeft: <number>(<any>CardValue[arrayNames[5]]),
      SecondPlayerBackRight: <number>(<any>CardValue[arrayNames[6]]),
      SecondPlayerBackLeft: <number>(<any>CardValue[arrayNames[7]]),
      UsedCard: 0
    };
    this.FirstPlayerFrontRight = new Card(CardValue[arrayNames[0]]);
    this.FirstPlayerFrontLeft = new Card(CardValue[arrayNames[1]]);
    this.FirstPlayerBackRight = new Card(CardValue[arrayNames[2]]);
    this.FirstPlayerBackLeft = new Card(CardValue[arrayNames[3]]);
    this.createCardComponent(
      this.FirstPlayerBackLeft,
      this.FirstPlayerBackLeftEvent,
      this.container
    );
    this.createCardComponent(
      this.FirstPlayerBackRight,
      this.FirstPlayerBackRightEvent,
      this.container
    );

    this.createCardComponent(
      this.FirstPlayerFrontLeft,
      this.FirstPlayerFrontLeftEvent,
      this.container
    );
    this.createCardComponent(
      this.FirstPlayerFrontRight,
      this.FirstPlayerFrontRightEvent,
      this.container
    );

    console.log(this.gameRun);
  }

  show2card() {
    setTimeout(() => {
      this.emitEventToChild(this.FirstPlayerFrontLeftEvent);
      this.emitEventToChild(this.FirstPlayerFrontRightEvent);
    }, 0);
    setTimeout(() => {
      console.log("changed :");
      this.emitEventToChild(this.FirstPlayerFrontLeftEvent);
      this.emitEventToChild(this.FirstPlayerFrontRightEvent);
      this.gameOnRun();
      this.allowTakeCard(true);
      
    }, 5000);
  }
  getRandomCard() {
    this.allowTakeCard(false);
    let randomNum: number;
    while (this.myGame.cardTable[CardValue[randomNum]] != 1) {
      randomNum = Math.floor(Math.random() * 55) + 1;
    }
    console.log(randomNum);
    this.gameRun.UsedCard = randomNum;
    this.gameOnRun();

    // let pic: string = randomNum.toString() + ".png";
  }

  allowTakeCard(flag:boolean){
    var el = this.elementRef.nativeElement.querySelector("#DeckOfCards");
      if (el) {
        if(flag)
          el.onclick =  this.getRandomCard.bind(this)
        else
          el.onclick = null;
      }
  }
  gameOnRun() {
    // this.clearDeck(this.usedCardcontainer);
    this.clearDeck(this.CardTurncontainer);
    
    if (this.gameRun.UsedCard) {
      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard),
        this.CardTurnEvent,
        this.CardTurncontainer
      );
    }
    setTimeout(() => this.emitEventToChild(this.CardTurnEvent), 0);
    
      this.getChooseDeckOfCard();
    
    
  }

  sendUserTurn(){
    console.log("sent")
    this.gameservice.gameonrun(this.gameRun).subscribe((res)=>{
        this.myGame = res
        this.clearDeck(this.container);
        this.setLocationCards()
        this.allowTakeCard(true)
    },err=>{

    })
  }

  getChooseDeckOfCard(){
    
    var el = this.elementRef.nativeElement.querySelector(".BurntCard");
    if (el) {
        el.onclick =  this.moveToBurnCard.bind(this)
    }

  }

  moveToBurnCard(){
    this.clearDeck(this.usedCardcontainer);
    this.clearDeck(this.CardTurncontainer);
    if (this.gameRun.UsedCard) {
      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
    }
    setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
    if(this.gameRun.UsedCard!=0)
    {
    this.sendUserTurn()
    }
  }


  clearDeck(container: any) {
    container.clear();
  }

  // getWinner(){
  //   let cnt=0;
  //   for(let i=0;i<55;i++)
  //   {
  //     if(this.myGame.cardTable[CardValue[i]]==2)
  //     {
  //       cnt++;
  //     }
  //   }
  //   if(cnt==47)
  //   {

  //   }
  // }
}
