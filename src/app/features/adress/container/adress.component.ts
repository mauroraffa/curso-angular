import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdressService } from '../services/adress.service';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, AfterViewInit {

    states: [];

    constructor(
        private domicilioService: AdressService
    ) { }

    ngOnInit() {
        this.loadSelect();
    }

    ngAfterViewInit() {
    }

    loadSelect() {
        this.domicilioService.loadStates().subscribe((response) => {
            if (response) {
                this.states = response.provincias;
            }
        });
    }

    saveAdress() {
        console.log('guardando domicilio');
    }
}
