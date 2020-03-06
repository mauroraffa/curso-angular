import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdress from './adress.reducer';
export const selectState = createFeatureSelector<fromAdress.IAdress>('adress');
export const selectData = createSelector(selectState, (state: fromAdress.IAdress) => {
  if (state.isFetchCompleted) {
    return state.data;
  }
});
