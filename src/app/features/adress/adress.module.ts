import { NgModule } from '@angular/core';
import { AdressComponent } from './container/adress.component';
import { AdressService } from './services/adress.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
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
