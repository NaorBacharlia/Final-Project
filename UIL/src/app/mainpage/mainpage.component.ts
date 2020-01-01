import { Component, OnInit } from '@angular/core';
import { userInfo } from '../shared/models/user-info.model';
import { Router } from '@angular/router';
import { UpdatedetailsComponent } from '../updatedetails/updatedetails.component';
import { GameService } from '../shared/services/game.service';
import { GeneralGameInfoModel } from '../shared/models/generalgamegame-info.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent  {

  public flag:boolean=false;
  public MyAuthUser:string=localStorage.getItem('authUser');
  public username:string=this.MyAuthUser.substring(64);
  public continuemygame:GeneralGameInfoModel;
  // DI
  constructor( private router: Router,private gameservice:GameService) { }
  // ngOnInit(){
  //   this.gameservice.continuegame().subscribe(
  //     (res)=>{
  //       this.flag=true;
  //       console.log(this.flag);
  //       this.continuemygame=res;
  //     },
  //     (err)=>{console.log(err)}
  //   ) 
  // }
  showscore(){

  }


  moveToStartGame(){

    this.router.navigate(['/game']);
  }



  
  moveToUpdate(){
    this.router.navigate(['/updatedetails']);
  }

}

