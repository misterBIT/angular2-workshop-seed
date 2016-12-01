import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';
import {IShopItem} from "./shop.model";

@Component({
	selector: 'shop-front',
	template: `<h3>Shop</h3>
				<!--<curr-time></curr-time>-->
				<countdown (due)="due()" [to]="futureTime"></countdown>
				<div class="col-xs-9">
					<router-outlet></router-outlet>
				</div>
				<shopping-cart class="col-xs-3" (remove)="shopService.removeItemFromCart($event)" [shoppingCart]="shopService.shoppingCart"></shopping-cart>`
})
export class ShopFrontComponent implements OnInit {
	private items: IShopItem[];
	private futureTime = Date.now() + 5*1000;
	ngOnInit(): void {
		this.shopService.getItems().then((data)=> {
			this.items = data;
		})

		// setTimeout(()=>{
		// 	this.futureTime = Date.now() + 40*60*1000;
		// }, 3000);
	}

	due() {
		console.log('DUE!');
	}

	constructor(private shopService: ShopService) {
	}

}
