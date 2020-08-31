import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,
  ComponentFactory,ComponentFactoryResolver} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { GameModule } from './game/game.module';
import { RulesComponent } from './rules/rules.component'
import {MatButtonModule} from '@angular/material/button';
import { WinnerComponent } from './winner/winner.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    UpdatedetailsComponent,
    GameComponent,
    RulesComponent,
    WinnerComponent,
    ScoreComponent,
    // CardComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GameModule,
  ],
  entryComponents: [
    RulesComponent,
    WinnerComponent
    ,ScoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
