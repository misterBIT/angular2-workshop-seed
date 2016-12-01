import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {routes} from "./app.routes";
import {SharedModule} from "./shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {shopModule} from './shop/shop.module';
import {petModule} from './pet/pet.module';
import {UserAuthModule} from "./userAuth/user.module";

import { PetService }   from './pet/pet.service';

@NgModule({
	imports: [BrowserModule, shopModule, petModule,  RouterModule.forRoot(routes), SharedModule, UserAuthModule],       // module dependencies
	declarations: [AppComponent, HomeComponent],   // components and directives
	providers: [PetService],
	bootstrap: [AppComponent],     // root component
})
export class AppModule {
}

