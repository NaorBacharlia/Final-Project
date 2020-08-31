import { Component, OnInit } from "@angular/core";
import { userInfo } from "../shared/models/user-info.model";
import { Router } from "@angular/router";
import { UpdatedetailsComponent } from "../updatedetails/updatedetails.component";
import { GameService } from "../shared/services/game.service";
import { GeneralGameInfoModel } from "../shared/models/generalgamegame-info.model";
import { UserService } from '../shared/services/user.service';
import {MatDialog} from '@angular/material/dialog';
import { RulesComponent } from '../rules/rules.component';
import { ScoreComponent } from '../score/score.component';


@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent {
 
  public flag: boolean = false;
  public MyAuthUser: string = localStorage.getItem("authUser");
  public username: string = this.MyAuthUser.substring(64);
  public continuemygame: GeneralGameInfoModel;
  // DI
  constructor(private router: Router, private gameservice: GameService,private userservice:UserService, public dialog: MatDialog) {}
  showscore() {
    let dialogRef = this.dialog.open(ScoreComponent, {
      height: '150px',
      width: '300px',
    });

  
  }
  moveToStartGame() {
    this.router.navigate(["/game"]);
  }
  moveToUpdate() {
    this.router.navigate(["/updatedetails"]);
  }
  showRulesGame(){
    
    let dialogRef = this.dialog.open(RulesComponent, {
      height: '700px',
      width: '787px',
    });

  }
}
