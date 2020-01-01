import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { GameService } from '../shared/services/game.service';
import { GeneralGameInfoModel } from '../shared/models/generalgamegame-info.model';
import { GameOnRunModel } from '../shared/models/gameonruninfo.model';
import {CardComponent} from '../card/card.component'; 
import { CardValue } from '../shared/models/CardValue';
import { from } from 'rxjs';
import {Card} from '../card/card';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {
  @ViewChild(Card) FirstPlayerFrontRight:Card;
  @ViewChild(Card) FirstPlayerFrontLeft: Card;
  @ViewChild(Card) FirstPlayerBackRight: Card;
  @ViewChild(Card) FirstPlayerBackLeft:  Card;
 
  public myGame:GeneralGameInfoModel;
  public gameRun:GameOnRunModel;
  // public cardvalue:CardValue;
  constructor(private gameservice:GameService) { }
  status:boolean=false;
  state:string='card-back';
  
  ngOnInit() {
    this.gameservice.startnewgame().subscribe(
      (res)=>{
        this.myGame=res;
        // this.gameRun.GameId=this.myGame.cardTable.GameId;
        console.log(this.myGame);
        console.log(this.myGame.cardTable.JackOfClover);
       
        this.setLocationCards();
        
      },(err)=>{console.log(err)}
      
    );
  }

  setLocationCards(){
    console.log("card valu",CardValue);
    // this.gameRun.GameId=this.myGame.cardTable.GameId;
    console.log("aaa",this.myGame.cardTable)
    let arrayNames=[];
    for(let value=3;value<=10; value++){
      let keyArr = Object.keys(this.myGame.cardTable);
      let key="";
      for(let i=0; i<keyArr.length;i++){
        if(this.myGame.cardTable[keyArr[i]]==value){
          key=keyArr[i];
          arrayNames.push(key)
          break;
        }
      }
      console.log(key,value);
    }
    console.log(CardValue[arrayNames[0]])
    this.gameRun= {
    GameId: this.myGame.cardTable.GameId,
    FirstPlayerFrontRight: <number><any>CardValue[arrayNames[0]],
    FirstPlayerFrontLeft: <number><any>CardValue[arrayNames[1]],
    FirstPlayerBackRight: <number><any>CardValue[arrayNames[2]],
    FirstPlayerBackLeft:  <number><any>CardValue[arrayNames[3]],
    SecondPlayerFrontRight: <number><any>CardValue[arrayNames[4]],
    SecondPlayerFrontLeft: <number><any>CardValue[arrayNames[5]],
    SecondPlayerBackRight:<number><any>CardValue[arrayNames[6]],
    SecondPlayerBackLeft: <number><any>CardValue[arrayNames[7]],
    UsedCard: 0   
    }
    this.FirstPlayerFrontRight=new Card(CardValue[arrayNames[0]]);
    this.FirstPlayerFrontLeft =new Card(CardValue[arrayNames[1]]);
    this.FirstPlayerBackRight =new Card(CardValue[arrayNames[2]]);
    this.FirstPlayerBackLeft  =new Card(CardValue[arrayNames[3]]);
    console.log(this.gameRun)
  }

  show2card(){
    setTimeout(()=>{

    },5000)
  }


 

}
