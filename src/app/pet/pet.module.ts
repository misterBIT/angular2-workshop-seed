import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import { PetCenterComponent }   from './pet-center.component';
import { PetListComponent }   from './pet-list.component';
import { PetComponent }   from './pet.component';
import { PetInputComponent }   from './pet-input.component';
import { PetFilterComponent }   from './pet-filter.component';
import { PetSelectorComponent }   from './pet-selector.component';
import { PetSearchPipe }   from './pet-search.pipe';
import { PetService }   from './pet.service';
import { petRoutes }   from './pet.routes';


@NgModule({
    imports: [SharedModule, RouterModule.forChild(petRoutes)],
    exports: [PetCenterComponent, PetSelectorComponent],
    declarations: [PetCenterComponent, PetListComponent, PetSelectorComponent, PetComponent, PetInputComponent, PetSearchPipe, PetFilterComponent],
    // providers: [PetService],
})
export class petModule { }
