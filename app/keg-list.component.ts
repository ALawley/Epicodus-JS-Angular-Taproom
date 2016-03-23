import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      [keg]="currentKeg" (onEditKeg)="kegToEdit = $event">
    </keg-display>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    <edit-keg-details *ngIf="kegToEdit" [keg]="kegToEdit" (onEndEdit)="kegToEdit = null"></edit-keg-details>
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
