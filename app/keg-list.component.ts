import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      [keg]="currentKeg">
    </keg-display>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  createKeg(userInputArray: string[]): void {
    this.kegList.push(
      new Keg(userInputArray[0], userInputArray[1], userInputArray[2], parseFloat(userInputArray[3]), parseFloat(userInputArray[4]))
    );
  }
}
