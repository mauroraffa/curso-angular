import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { AdressService } from '../services/adress.service';
import { Subscription } from 'rxjs';

import * as fromActionsAdress from '../store/adress.actions';
import * as fromSelectorAdress from '../store/adress.selectors';
import { Store, select } from '@ngrx/store';
import { IAdress } from '../store/adress.reducer';
import { filter } from 'rxjs/operators';
import { runInThisContext } from 'vm';
import { state } from '@angular/animations';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, OnDestroy {

    states: [] = [];
    state: number;

    loadStatesUnsuscribe: Subscription;

    constructor(
        private store: Store<IAdress>
    ) { }

    ngOnInit() {
        this.loadState();

        this.getStates();
    }

    loadState() {
        this.store.dispatch(
            new fromActionsAdress.FetchPending(),
        );
    }

    getStates() {
        this.loadStatesUnsuscribe = this.store
            .pipe(select(fromSelectorAdress.selectData))
            .pipe(filter(val => !!val))
            .subscribe((data: any) => {
                this.states = data.provincias;
            });
    }

    selectState(event) {
        this.state = event;
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
