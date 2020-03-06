import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
