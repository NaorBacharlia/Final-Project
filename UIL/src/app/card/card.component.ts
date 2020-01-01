import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Card} from './card';
@Component({
  selector: 'app-card',
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-180deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
  ])],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  


})//
export class CardComponent implements OnInit {
  @Input() card:Card;
  @Output() private clickedCardEmitter: EventEmitter<Card> = new EventEmitter();
  constructor() { }
  status:boolean=false;
  state:string='card-back';
  
  ngOnInit() {
  }
  
  rotate(){
    
    if(this.card){
    this.status=!this.status;
    this.state=this.state==='card-front'? 'card-back':'card-front';
    }
  
}
  
}
