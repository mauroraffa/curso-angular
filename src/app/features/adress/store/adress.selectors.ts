import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdress from './adress.reducer';

export const selectState = createFeatureSelector<fromAdress.IAdress>('adress');
export const selectDataState = createSelector(selectState, (state: fromAdress.IAdress) => {
  if (state.isFetchCompleted) {
    return state.states;
  }
});

export const selectDistrict = createFeatureSelector<fromAdress.IAdress>('adress');
export const selectDataDistrict = createSelector(selectDistrict, (state: fromAdress.IAdress) => {
  if (state.isFetchCompleted) {
    return state.distrcts;
  }
});
