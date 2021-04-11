import { ReduxAction, createActionGenerator } from './types';


// Action types
export const ADD_RESULT_ACTION = 'ADD_RESULT_ACTION';
export const REMOVE_RESULT_ACTION = 'REMOVE_RESULT_ACTION';
export const CLEAR_RESULT_ACTION = 'CLEAR_RESULT_ACTION';

// Action generators
export const addResult: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(ADD_RESULT_ACTION);

export const removeResult: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(ADD_RESULT_ACTION);

export const clear: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(CLEAR_RESULT_ACTION);

