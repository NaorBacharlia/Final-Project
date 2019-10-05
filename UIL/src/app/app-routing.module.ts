import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login",component:LoginComponent} ,
  {path:"register",component:RegisterComponent},
  {path:"mainpage",component:MainpageComponent},
  {path:"updatedetails",component:UpdatedetailsComponent},
  {path:"game",component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
