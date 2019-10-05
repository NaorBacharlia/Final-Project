import { Injectable } from '@angular/core';
import { userInfo } from '../models/user-info.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CardTableModel } from '../models/cardtable-info.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  

  public newGameInfo:CardTableModel;
  constructor(private myHttpClient:HttpClient) { }
  public startnewgame(){
    let myUserName=localStorage.getItem('userName');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+ myUserName
      })
    };
    return this.myHttpClient.get<CardTableModel>("http://localhost:55727/api/GetStartNewGame",httpOptions);
  }
}
