import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <curr-time></curr-time>
        <h1>Pets R Us</h1>
        <pet-list></pet-list>
        <pet-input></pet-input>
    `
})
export class PetCenterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}