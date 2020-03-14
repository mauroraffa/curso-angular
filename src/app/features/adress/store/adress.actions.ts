import { Action } from '@ngrx/store';

export enum AdressActionsTypes {
  FETCH_PENDING = '[ADRESS: PENDING]',
  // FETCH_FULFILLED = '[ADRESS:  FULFILLED] Last',
  FETCH_ADD_STATE = '[ADRESS:  FETCH_ADD_STATE]',
  FETCH_STATE_FULFILLED = '[ADRESS:  FETCH_STATE_FULFILLED]',
  FETCH_ADD_DISTRICT = '[ADRESS:  FETCH_ADD_DISTRICT]',
  FETCH_DISTRICT_FULFILLED = '[ADRESS:  FETCH_DISTRICT_FULFILLED]',
  FETCH_ERROR = '[ADRESS: ERROR]  Last',
  CLEAR_DATA = '[ADRESS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = AdressActionsTypes.FETCH_PENDING;
  constructor() { }
}

export class FetchAddState implements Action {
  readonly type = AdressActionsTypes.FETCH_ADD_STATE;
  constructor() { }
}
export class FetchAddDistrict implements Action {
  readonly type = AdressActionsTypes.FETCH_ADD_DISTRICT;
  constructor(public payload: any) { }
}

export class FetchDistrictFulfilled implements Action {
  readonly type = AdressActionsTypes.FETCH_DISTRICT_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchStateFulfilled implements Action {
  readonly type = AdressActionsTypes.FETCH_STATE_FULFILLED;
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
  FetchAddState |
  FetchStateFulfilled |
  FetchAddDistrict |
  FetchDistrictFulfilled |
  FetchError |
  ClearData;
