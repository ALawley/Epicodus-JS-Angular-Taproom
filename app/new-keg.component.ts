import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h4>Add a Keg:</h4>
      <input placeholder="name" class="col-sm-8 input-lg" #newName>
      <input placeholder="brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="style" class="col-sm-8 input-lg" #newStyle>
      <input placeholder="price" type="number" step="any" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="abv" type="number" step="any" class="col-sm-8 input-lg" #newAbv>
      <button (click)="addKeg(newName, newBrand, newStyle, newPrice, newAbv)" class="btn-success btn-lg add-button">Add</button>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newStyle: HTMLInputElement, newPrice: HTMLInputElement, newAbv: HTMLInputElement){
    var newKegInputs: string[] = [];
    newKegInputs.push(newName.value);
    newKegInputs.push(newBrand.value);
    newKegInputs.push(newStyle.value);
    newKegInputs.push(newPrice.value);
    newKegInputs.push(newAbv.value);
    this.onSubmitNewKeg.emit(newKegInputs);
    newName.value="";
    newBrand.value="";
    newStyle.value="";
    newPrice.value="";
    newAbv.value="";
  }
}
