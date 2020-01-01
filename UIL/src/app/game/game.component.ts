import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';
import { GeneralGameInfoModel } from '../shared/models/generalgamegame-info.model';
import { CardTableModel } from '../shared/models/cardtable-info.model';
import { GamesInfoModel } from '../shared/models/game-info.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public myGame:GeneralGameInfoModel;
  constructor(private gameservice:GameService) { }

  ngOnInit() {
    this.gameservice.startnewgame().subscribe(
      (res)=>{
        this.myGame=res;
        console.log(this.myGame);
      },(err)=>{console.log(err)}
      
    );
  }


}
