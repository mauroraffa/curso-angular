import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { AdressService } from '../services/adress.service';
import { Subscription, Observable } from 'rxjs';

import * as fromActionsAdress from '../store/adress.actions';
import * as fromSelectorAdress from '../store/adress.selectors';
import { Store, select } from '@ngrx/store';
import { IAdress } from '../store/adress.reducer';
import { filter, debounceTime, map } from 'rxjs/operators';
import { state } from '@angular/animations';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, OnDestroy {

    states: [] = [];
    districs: [] = [];
    state: number;
    distric: number;

    loadStatesUnsuscribe: Subscription;
    loadDistrctUnsuscribe: Subscription;

    // Paso 2
    adressForm: FormGroup;

    // Paso 3
    constructor(
        private fb: FormBuilder,
        private store: Store<IAdress>,
        private addressService: AdressService,
    ) { }

    ngOnInit() {
        this.store.dispatch(
            new fromActionsAdress.FetchPending(),
        );
        this.loadState();
        this.getStates();
        this.buildForm();
    }

    // Paso 4
    buildForm() {
        this.adressForm = this.fb.group({
            streetName: ['', Validators.required],
            streetNumber: ['', Validators.required],
            stateName: [null, Validators.required],
            districtName: [null, Validators.required],
            // paso 13
            zipCode: [
                { value: '', disabled: true },
                Validators.required,
                this.zipCodeValidator()
            ],
            flow: [''],
            apartment: [''],
        });
    }

    loadState() {
        this.store.dispatch(
            new fromActionsAdress.FetchAddState(),
        );
    }

    getStates() {
        this.loadStatesUnsuscribe = this.store
            .pipe(select(fromSelectorAdress.selectDataState))
            .pipe(filter(val => !!val))
            .subscribe((data: any) => {
                this.states = data.provincias;
            });
    }

    selectState(event) {
        this.state = event;
        this.store.dispatch(
            new fromActionsAdress.FetchAddDistrict(this.state),
        );
        this.getDistrict();
    }

    getDistrict() {
        this.loadDistrctUnsuscribe = this.store
            .pipe(select(fromSelectorAdress.selectDataDistrict))
            .pipe(filter(val => !!val))
            .subscribe((data: any) => {
                this.districs = data.municipios;
                // paso 14
                this.adressForm.get('zipCode').enable();
            });
    }

    selectDistrict(event) {
        this.distric = event;
    }

    saveAdress() {
        console.log('guardando domicilio');
    }

    ngOnDestroy() {
        if (this.loadStatesUnsuscribe) {
            this.loadStatesUnsuscribe.unsubscribe();
        }
        if (this.loadDistrctUnsuscribe) {
            this.loadDistrctUnsuscribe.unsubscribe();
        }
    }

    // paso 15
    zipCodeValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return this.addressService.searchZipCode(control.value)
                .pipe(
                    map(res => {
                        console.log(this.adressForm.get('zipCode'));
                        if (!res.status) {
                            return { zipCodeNotExists: true };
                        }
                    })
                );
        };
    }

}
