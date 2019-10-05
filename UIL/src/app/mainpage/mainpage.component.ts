import { Component, OnInit } from '@angular/core';
import { userInfo } from '../shared/models/user-info.model';
import { Router } from '@angular/router';
import { UpdatedetailsComponent } from '../updatedetails/updatedetails.component';
import { GameService } from '../shared/services/game.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent  {

  public username:string=localStorage.getItem('userName');
 
  // DI
  constructor( private router: Router) { }

  showscore(){

  }


  moveToStartGame(){

    this.router.navigate(['/game']);
  }



  
  moveToUpdate(){
    this.router.navigate(['/updatedetails']);
  }

}

