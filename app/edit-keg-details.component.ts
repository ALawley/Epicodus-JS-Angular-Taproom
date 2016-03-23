import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  outputs: ['onEndEdit'],
  template: `
    <div class="keg-form">
      <h4>Edit Keg Information</h4>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg">
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg">
      <input [(ngModel)]="keg.style" class="col-sm-8 input-lg">
      <input [(ngModel)]="keg.price" type="number" step="any" class="col-sm-8 input-lg">
      <input [(ngModel)]="keg.abv" type="number" step="any" class="col-sm-8 input-lg">
      <button (click)=endEdit() class="btn-success btn-lg add-button">Done Editing</button>
      <button (click)=deleteKeg() class="btn-success btn-lg add-button">Delete Keg</button>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
  public onEndEdit: EventEmitter<Keg>;
  constructor() {
    this.onEndEdit = new EventEmitter();
  }
  endEdit() {
    this.onEndEdit.emit(this.keg);
  }
  deleteKeg() {
    this.keg.delete = true;
    this.onEndEdit.emit(this.keg);
  }
}
