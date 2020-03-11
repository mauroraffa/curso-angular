import { NgModule } from '@angular/core';
import { AdressComponent } from './container/adress.component';
import { AdressService } from './services/adress.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';

import * as fromAdressReducer from './store/adress.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdressEffects } from './store/adress.effects';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        StoreModule.forFeature('adress', fromAdressReducer.reducer),
        EffectsModule.forFeature([AdressEffects])
    ],
    declarations: [
        AdressComponent
    ],
    entryComponents: [
        AdressComponent
    ],
    exports: [
        AdressComponent
    ],
    providers: [AdressService]
})
export class AdressModule {
}
