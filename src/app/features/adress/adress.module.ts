import { NgModule } from '@angular/core';
import { AdressComponent } from './container/adress.component';
import { AdressService } from './services/adress.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule
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
