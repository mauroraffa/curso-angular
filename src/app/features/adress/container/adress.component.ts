import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { AdressService } from '../services/adress.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, AfterViewInit, OnDestroy {

    states: [] = [];

    loadStatesUnsuscribe: Subscription;

    constructor(
        private domicilioService: AdressService
    ) { }

    ngOnInit() {
        this.loadSelect();
    }

    ngAfterViewInit() {

    }

    loadSelect() {
        this.loadStatesUnsuscribe = this.domicilioService.loadStates().subscribe((response) => {
            if (response) {
                this.states = response.provincias;
                console.log('Adentro de la suscripcion', this.states);
            }
        });
        console.log('Afuera de la suscripcion', this.states);
    }

    saveAdress() {
        console.log('guardando domicilio');
    }

    ngOnDestroy() {
        if (this.loadStatesUnsuscribe) {
            this.loadStatesUnsuscribe.unsubscribe();
        }
    }
}
