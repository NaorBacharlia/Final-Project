import { NgModule,ComponentFactory,ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../card/card.component'; 

@NgModule({
  declarations: [CardComponent],
  entryComponents: [CardComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent
  ]
})
export class GameModule {
 }
