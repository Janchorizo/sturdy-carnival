import { ReduxAction, createActionGenerator } from './types';


// Action types
export const SET_CDF = 'SET_CDF';
export const CLEAR_CDF = 'CLEAR_CDF';

// Action generators
export const setCdf: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(SET_CDF);

export const clear: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(CLEAR_CDF);
