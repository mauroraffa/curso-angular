import { NgModule, ModuleWithProviders } from '@angular/core';
import { AdressComponent } from './container/adress.component';
import { AdressService } from './services/adress.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';

import * as fromAdressReducer from './store/adress.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdressEffects } from './store/adress.effects';

// Paso 1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('adress', fromAdressReducer.reducer),
        EffectsModule.forFeature([AdressEffects]),
        EffectsModule.forRoot([])
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
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdressModule
        };
    }
}
