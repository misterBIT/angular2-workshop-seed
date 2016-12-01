import {Component, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {IShopItem} from "./shop.model";
import {PetService} from "../pet/pet.service";

import {Input, Output} from '@angular/core';

@Component({
	selector: 'shopping-cart',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<h3>Shopping Cart</h3>
				<ul>
					<li *ngFor="let item of shoppingCart;let i = index">
						 <button class="btn btn-danger" (click)="remove.emit(i)">X</button>
						 <span> {{item.title}}</span>
					 </li>
				</ul>
				<span>Total Sum:{{sum}}</span>
				<pet-selector (select)="petId=$event"></pet-selector>
				<button [disabled]="!petId || shoppingCart.length===0" (click)="purchase()">Purchase</button>
				`
})
export class ShoppingCartCompoennt {
	@Input() shoppingCart: IShopItem[] = [];
	@Output() remove = new EventEmitter<number>();
	petId;

	constructor(private petService: PetService) {

	}

	get sum() {
		return this.shoppingCart.reduce((acc, item)=>acc += (+item.price), 0);
	}
	purchase() {
		console.log('Purchase for ', this.petId);
	}

}
