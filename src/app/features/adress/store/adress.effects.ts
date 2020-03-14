import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AdressActionsTypes } from './adress.actions';
import { AdressService } from '../services/adress.service';

@Injectable()
export class AdressEffects {
  constructor(private actions$: Actions, private adressService: AdressService) { }

  @Effect() getStates$ = this.actions$.pipe(ofType(AdressActionsTypes.FETCH_ADD_STATE)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.adressService.loadStates().pipe(
        map(response => ({ type: AdressActionsTypes.FETCH_STATE_FULFILLED, payload: response })),
        catchError((err: HttpErrorResponse) => of({ type: AdressActionsTypes.FETCH_ERROR, payload: err })),
      );
    }),
  );

  @Effect() getDistrct$ = this.actions$.pipe(ofType(AdressActionsTypes.FETCH_ADD_DISTRICT)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.adressService.loadDistrict(payload).pipe(
        map(response => ({ type: AdressActionsTypes.FETCH_DISTRICT_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: AdressActionsTypes.FETCH_ERROR, payload: err })),
        );
    }),
  );
}
