import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { PourComponent } from './pour.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PourComponent],
  template: `
    <div>
      <h3>{{ keg.name }}, {{ keg.brand }}</h3>
      <h4>{{ keg.style }}, ABV: {{ keg.abv }}</h4>
      <h4>Price: $ {{ keg.price }}</h4>
      <h4>Pours Left: {{ keg.pours }}</h4>
      <pour *ngIf="keg.pours > 0" [pourKeg]="keg"></pour>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;

}
