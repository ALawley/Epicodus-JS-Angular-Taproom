import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pour',
  inputs: ['keg'],
  template: `
    <button (click)="pourADrink()">Pour a Pint!</button>
  `
})

export class PourComponent{
  public keg: Keg;
  pourADrink(){
    this.keg.pours = this.keg.pours - 1;
  }
}
