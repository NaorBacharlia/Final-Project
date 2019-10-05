import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  constructor(private gameservice:GameService) { }

  ngOnInit() {
    this.gameservice.startnewgame().subscribe(
      (res)=>{
        console.log(res);
      },(err)=>{console.log(err)}
      
    );
  }


}
