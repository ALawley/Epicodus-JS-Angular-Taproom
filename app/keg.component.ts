import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h3>{{ keg.name }}, {{ keg.brand }}</h3>
      <h4>{{ keg.style }}, ABV: {{ keg.abv }}</h4>
      <h4>Price: $ {{ keg.price }}</h4>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  
}
