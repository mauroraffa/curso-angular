import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { AdressModule } from 'src/app/features/adress/adress.module';
import { ClientRoutingModule } from './client.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';


@NgModule({
    imports: [
        CommonModule,
        AdressModule.forRoot(),
        ClientRoutingModule,
        ComponentsModule
    ],
    declarations: [ClientComponent],
    entryComponents: [ClientComponent],
    exports: [ClientComponent]
})
export class ClientModule { }
