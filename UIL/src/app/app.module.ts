import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
// import {sha1} from 'node_modules/sha1';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    UpdatedetailsComponent,
    GameComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
