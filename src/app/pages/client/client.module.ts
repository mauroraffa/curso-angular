import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { AdressModule } from 'src/app/features/adress/adress.module';
import { ClientRoutingModule } from './client.routing';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, AdressModule, ClientRoutingModule],
    declarations: [ClientComponent],
    entryComponents: [ClientComponent],
    exports: [ClientComponent]
})
export class ClientModule { }
