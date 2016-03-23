import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { StrongPipe } from './strong.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [StrongPipe],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="strong">Show Strong Beers</option>
      <option value="notStrong">Show Sessionable Beers</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | strong:filterStrong"
      [keg]="currentKeg" (onEditKeg)="kegToEdit = $event">
    </keg-display>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    <edit-keg-details *ngIf="kegToEdit" [keg]="kegToEdit" (onEndEdit)="kegToEdit = null" (onEndEdit)="deleteCleanup()"></edit-keg-details>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public filterStrong: string = "all";
  createKeg(userInputArray: string[]): void {
    this.kegList.push(
      new Keg(userInputArray[0], userInputArray[1], userInputArray[2], parseFloat(userInputArray[3]), parseFloat(userInputArray[4]))
    );
  }
  deleteCleanup(): void {
    for (var i = 0; i < this.kegList.length; i++){
      if (this.kegList[i].delete) {
        this.kegList.splice(i, 1);
      }
    }
  }
  onChange(filterOption) {
    this.filterStrong = filterOption;
  }
}
