import { Component, OnInit } from '@angular/core';

import { PetService }  from './pet.service';

@Component({
  selector: 'pet-list',
  template: `
    <section>
      <h2>Pet List</h2>
      <pet-filter (update)="filterBy = $event"></pet-filter>
      <ul>
        <li *ngFor="let currPet of petService.pets | petSearch:filterBy">

          <pet [petModel]="currPet" (toggle)="petService.toggle($event)" >
          </pet>
          <button (click)="currPet.feed()">Feed</button>

        </li>
      </ul>
    </section>

  `
})
export class PetListComponent {
  filterBy = null;
  constructor(private petService : PetService) { }



}
