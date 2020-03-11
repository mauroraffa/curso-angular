import { Action } from '@ngrx/store';

export enum AdressActionsTypes {
  FETCH_PENDING = '[ADRESS: PENDING]',
  FETCH_FULFILLED = '[ADRESS:  FULFILLED] Last',
  FETCH_ERROR = '[ADRESS: ERROR]  Last',
  CLEAR_DATA = '[ADRESS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = AdressActionsTypes.FETCH_PENDING;
  constructor() { }
}

export class FetchFulfilled implements Action {
  readonly type = AdressActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = AdressActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = AdressActionsTypes.CLEAR_DATA;
}

export type AdressActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
