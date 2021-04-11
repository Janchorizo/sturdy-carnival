import { ReduxAction, createActionGenerator } from './types';


// Action types
export const SET_CDF_ACTION = 'SET_CDF_ACTION';
export const CLEAR_CDF_ACTION = 'CLEAR_CDF_ACTION';

// Action generators
export const setCdf: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(SET_CDF_ACTION);

export const clear: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(CLEAR_CDF_ACTION);
