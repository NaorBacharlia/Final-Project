import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../shared/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit, OnDestroy {
  public winner:string;
  public computerScore: number;
  public userScore:number;
  constructor(public game:GameService, public router: Router) { }
  ngOnDestroy(): void {
    this.game.winnerSubject.unsubscribe();
  }

  ngOnInit() {
    console.log("winner component");

    this.game.winnerSubject.subscribe(result => {
      console.log(result);
      
      this.winner = result[0] == -1? "Computer" : "User";
      this.userScore = result[1];
      this.computerScore = result[2];
    })
  }

  NavigateToMainPage() {
    
    this.router.navigate(["/mainpage"])
  }

}
