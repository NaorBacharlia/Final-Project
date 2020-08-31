import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  public score:string;
  public games:number;
  constructor(private userService :UserService) { }

  ngOnInit() {
    
    this.userService.getUserInfo().subscribe(
      res => {
        console.log(res.Score);
        this.score=res.Score;
        this.games=Number(this.score) / 100;
      },
      err => {
        console.log(err);
      });
  }

}
