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
import { CardRank } from "../shared/models/CardRank";
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
    this.componentRef.instance.id = card.name;
  }

  setLocationCards() {
  
    let arrayNames = [];
    if (this.myGame) {
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
      this.FirstPlayerFrontRight = new Card(
        CardValue[arrayNames[0]],
        "FirstPlayerFrontRight"
      );
      this.FirstPlayerFrontLeft = new Card(
        CardValue[arrayNames[1]],
        "FirstPlayerFrontLeft"
      );
      this.FirstPlayerBackRight = new Card(
        CardValue[arrayNames[2]],
        "FirstPlayerBackRight"
      );
      this.FirstPlayerBackLeft = new Card(
        CardValue[arrayNames[3]],
        "FirstPlayerBackLeft"
      );
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
    } else {
      console.log("game over");
    }
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
  }

  allowTakeCard(flag: boolean) {
    var el = this.elementRef.nativeElement.querySelector("#DeckOfCards");
    if (el) {
      if (flag) el.onclick = this.getRandomCard.bind(this);
      else el.onclick = null;
    }
  }
  gameOnRun() {
    // this.clearDeck(this.usedCardcontainer);
    this.clearDeck(this.CardTurncontainer);

    if (this.gameRun.UsedCard) {
      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.CardTurnEvent,
        this.CardTurncontainer
      );
    }
    setTimeout(() => this.emitEventToChild(this.CardTurnEvent), 0);

    this.getChooseDeckOfCard();
  }

  sendUserTurn() {
    console.log("sent");
    this.gameservice.gameonrun(this.gameRun).subscribe(
      res => {
        console.log("res", res);

        if (<unknown>(<GeneralGameInfoModel>res) != "game over") {
          this.myGame = res;
          this.clearDeck(this.container);
          this.setLocationCards();
          this.allowTakeCard(true);
        } else {
          console.log("game over");
          this.checkWinner()
          console.log("this.gameRun", this.gameRun);
        }
      },
      err => {
        console.log(this.gameRun);
      }
    );
  }

  getChooseDeckOfCard() {
    var el = this.elementRef.nativeElement.querySelector(".BurntCard");
    if (el) {
      el.onclick = this.moveToBurnCard.bind(this);
    }
    var FirstPlayerBackLeft = this.elementRef.nativeElement.querySelector(
      "#FirstPlayerBackLeft"
    );
    if (FirstPlayerBackLeft) {
      FirstPlayerBackLeft.onclick = this.moveBackLeft.bind(this);
    }

    var FirstPlayerBackRight = this.elementRef.nativeElement.querySelector(
      "#FirstPlayerBackRight"
    );
    if (FirstPlayerBackRight) {
      FirstPlayerBackRight.onclick = this.moveBackRight.bind(this);
    }

    var FirstPlayerFrontLeft = this.elementRef.nativeElement.querySelector(
      "#FirstPlayerFrontLeft"
    );
    if (FirstPlayerFrontLeft) {
      FirstPlayerFrontLeft.onclick = this.moveFrontLeft.bind(this);
    }

    var FirstPlayerFrontRight = this.elementRef.nativeElement.querySelector(
      "#FirstPlayerFrontRight"
    );
    if (FirstPlayerFrontRight) {
      FirstPlayerFrontRight.onclick = this.moveFrontRight.bind(this);
    }
  }
  moveFrontRight() {
    if (this.gameRun.UsedCard) {
      this.clearDeck(this.usedCardcontainer);
      this.clearDeck(this.CardTurncontainer);
      let temp = this.gameRun.UsedCard;
      this.gameRun.UsedCard = this.gameRun.FirstPlayerFrontRight;
      this.gameRun.FirstPlayerFrontRight = temp;

      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
      setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
      if (this.gameRun.UsedCard != 0) {
        this.sendUserTurn();
      }
    }
  }
  moveFrontLeft() {
    if (this.gameRun.UsedCard) {
      this.clearDeck(this.usedCardcontainer);
      this.clearDeck(this.CardTurncontainer);
      let temp = this.gameRun.UsedCard;
      this.gameRun.UsedCard = this.gameRun.FirstPlayerFrontLeft;
      this.gameRun.FirstPlayerFrontLeft = temp;

      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
      setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
      if (this.gameRun.UsedCard != 0) {
        this.sendUserTurn();
      }
    }
  }
  moveBackRight() {
    if (this.gameRun.UsedCard) {
      this.clearDeck(this.usedCardcontainer);
      this.clearDeck(this.CardTurncontainer);
      let temp = this.gameRun.UsedCard;
      this.gameRun.UsedCard = this.gameRun.FirstPlayerBackRight;
      this.gameRun.FirstPlayerBackRight = temp;

      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
      setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
      if (this.gameRun.UsedCard != 0) {
        this.sendUserTurn();
      }
    }
  }
  moveBackLeft() {
    if (this.gameRun.UsedCard) {
      this.clearDeck(this.usedCardcontainer);
      this.clearDeck(this.CardTurncontainer);
      let temp = this.gameRun.UsedCard;
      this.gameRun.UsedCard = this.gameRun.FirstPlayerBackLeft;
      this.gameRun.FirstPlayerBackLeft = temp;

      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
      setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
      if (this.gameRun.UsedCard != 0) {
        this.sendUserTurn();
      }
    }
  }

  moveToBurnCard() {
    this.clearDeck(this.usedCardcontainer);
    this.clearDeck(this.CardTurncontainer);
    if (this.gameRun.UsedCard) {
      this.createCardComponent(
        new Card("" + this.gameRun.UsedCard, "UsedCard"),
        this.UsedCardEvent,
        this.usedCardcontainer
      );
    }
    setTimeout(() => this.emitEventToChild(this.UsedCardEvent), 0);
    if (this.gameRun.UsedCard != 0) {
      this.sendUserTurn();
    }
  }

  checkWinner(){
    let userRank =    this.getUserRank(this.gameRun.FirstPlayerBackLeft,this.gameRun.FirstPlayerBackRight,this.gameRun.FirstPlayerFrontLeft,this.gameRun.FirstPlayerFrontRight);
    let computerRank = this.getUserRank(this.gameRun.SecondPlayerBackLeft,this.gameRun.SecondPlayerBackRight,this.gameRun.SecondPlayerFrontLeft,this.gameRun.SecondPlayerFrontRight);
    if(userRank < computerRank)
      console.log(`user Wins ${userRank} : ${computerRank}`)
    else
      console.log(`computer rank  ${computerRank} : ${userRank}`)
  }
  getUserRank(card1:number,card2:number,card3:number,card4:number):number{

      let rank = 0;

      rank += CardRank[CardValue[card1]]
      console.log("card1",CardRank[CardValue[card1]], "Value",CardValue[card1])
      rank += CardRank[CardValue[card2]]
      console.log("card2",CardRank[CardValue[card2]],"Value",CardValue[card2])
      rank += CardRank[CardValue[card3]]
      console.log("card3",CardRank[CardValue[card3]],"Value",CardValue[card3])
      rank += CardRank[CardValue[card4]]
      console.log("card4",CardRank[CardValue[card4]],"Value",CardValue[card4])
      return rank

  }
  clearDeck(container: any) {
    container.clear();
  }
}
