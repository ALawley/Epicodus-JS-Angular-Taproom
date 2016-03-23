import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { PourComponent } from './pour.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  outputs: ['onEditKeg'],
  directives: [PourComponent],
  template: `
    <div class="keg-display"
    [class.green]="keg.pours > 114"
    [class.yellow]="keg.pours > 10 && keg.pours <= 114"
    [class.red]="keg.pours <= 10 && keg.pours > 0"
    [class.empty]="keg.pours === 0">
      <h3>{{ keg.name }}, {{ keg.brand }}</h3>
      <h4>{{ keg.style }}, ABV: {{ keg.abv }}</h4>
      <h4>Price: $ {{ keg.price }}</h4>
      <h4>Pours Left: {{ keg.pours }}</h4>
      <pour *ngIf="keg.pours > 0" [pourKeg]="keg"></pour>
      <button (click)=editKeg()>Edit</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public onEditKeg: EventEmitter<Keg>;
  constructor() {
    this.onEditKeg = new EventEmitter();
  }
  editKeg() {
    this.onEditKeg.emit(this.keg);
  }

}
