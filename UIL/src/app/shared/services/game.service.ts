import { Injectable } from '@angular/core';
import { userInfo } from '../models/user-info.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CardTableModel } from '../models/cardtable-info.model';
import { GeneralGameInfoModel } from '../models/generalgamegame-info.model';
import { GameOnRunModel } from '../models/gameonruninfo.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public newGameInfo:CardTableModel;
  public winnerSubject = new BehaviorSubject<[number,number,number]>([0,0,0]);
  constructor(private myHttpClient:HttpClient) { }
  public myUserAuth=localStorage.getItem('authUser');
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic '+ this.myUserAuth
    })
  };
  public startnewgame(){
    return this.myHttpClient.get<GeneralGameInfoModel>("http://localhost:55727/api/GetStartNewGame",this.httpOptions);
  }

  public continuegame(){
    return this.myHttpClient.get<GeneralGameInfoModel>("http://localhost:55727/api/GetStartNewGame",this.httpOptions);
  }
  public gameonrun(gameonrun:GameOnRunModel){
    return this.myHttpClient.put<GeneralGameInfoModel>("http://localhost:55727/api/OnGameRun",gameonrun,this.httpOptions);
  }
  public setwinner(winnerId:number, userRank: number, computerRank:number)
  {
    console.log(computerRank, userRank, "GameService");
    
    this.winnerSubject.next([winnerId, userRank, computerRank]);
    return this.myHttpClient.put<boolean>("http://localhost:55727/api/PutSetwinnerGame",winnerId,this.httpOptions);
  }
  public exitGame(){
    return this.myHttpClient.get<string>("http://localhost:55727/api/GetExitGame",this.httpOptions);
  }
}
