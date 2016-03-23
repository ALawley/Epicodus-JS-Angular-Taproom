import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      [keg]="currentKeg">
    </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
}
