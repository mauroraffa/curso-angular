import { AdressActions, AdressActionsTypes } from './adress.actions';

export interface IAdress {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IAdress = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: AdressActions): IAdress {
  switch (action.type) {
    case AdressActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };

    case AdressActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        data: action.payload,
        isFetchCompleted: true,
      };

    case AdressActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: action.payload };

    case AdressActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
