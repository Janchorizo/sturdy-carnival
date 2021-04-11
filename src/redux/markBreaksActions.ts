import { ReduxAction, createActionGenerator } from './types';


// Action types
export const SET_BREAK_ACTION = 'SET_BREAK_ACTION';

// Action generators
export const setBreak: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(SET_BREAK_ACTION);

// For bootstrapping purposes
export class MarkBreaksActions {
    setBreak: (payload: any, error: boolean)=>ReduxAction = setBreak;
}
