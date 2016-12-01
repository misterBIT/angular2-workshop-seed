import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PetService }  from './pet.service';

@Component({
  selector: 'pet-selector',
  template: `
      <select #sel (change)="select.emit(sel.value)">
        <option value="">Select a Pet to gift</option>        
        <option *ngFor="let currPet of petService.pets" [value]="currPet.id">{{currPet.name}}</option>
      </select>

  `
})
export class PetSelectorComponent {
  @Output() select = new EventEmitter();
  constructor(private petService : PetService) { }
}
