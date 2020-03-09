import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';


@NgModule({
    imports: [CommonModule, ],
    declarations: [ButtonComponent],
    entryComponents: [ButtonComponent],
    exports: [ButtonComponent]
})
export class ComponentsModule { }
