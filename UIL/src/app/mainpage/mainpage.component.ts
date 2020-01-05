import { Component, OnInit } from "@angular/core";
import { userInfo } from "../shared/models/user-info.model";
import { Router } from "@angular/router";
import { UpdatedetailsComponent } from "../updatedetails/updatedetails.component";
import { GameService } from "../shared/services/game.service";
import { GeneralGameInfoModel } from "../shared/models/generalgamegame-info.model";
import { UserService } from '../shared/services/user.service';

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent {
  public score:string;
  public flag: boolean = false;
  public MyAuthUser: string = localStorage.getItem("authUser");
  public username: string = this.MyAuthUser.substring(64);
  public continuemygame: GeneralGameInfoModel;
  // DI
  constructor(private router: Router, private gameservice: GameService,private userservice:UserService) {}
  showscore() {
    this.userservice.getUserInfo().subscribe(
      res => {
        console.log(res.Score);
        this.score=res.Score;
      },
      err => {
        console.log(err);
      });
  }
  moveToStartGame() {
    this.router.navigate(["/game"]);
  }
  moveToUpdate() {
    this.router.navigate(["/updatedetails"]);
  }
}
