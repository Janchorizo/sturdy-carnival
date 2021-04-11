import { ReduxAction } from "./types";
import {
    ADD_RESULT_ACTION,
    REMOVE_RESULT_ACTION,
    CLEAR_RESULTS_ACTION,
} from './examsActions';


const initialState: number[] = [];

function hasParam (action: ReduxAction, key: string): boolean {
    return Object.hasOwnProperty.call(action.payload, key);
}

export function examsReducer(prevState=initialState, action: ReduxAction) {
    let newState = prevState;

    switch(action.type) {
        case ADD_RESULT_ACTION:
            if (hasParam(action, 'result')) {
                newState = [...prevState, action.payload.result];
            }
            break;
        case REMOVE_RESULT_ACTION:
            if (hasParam(action, 'index') &&
                    action.payload.index >= 0 &&
                    action.payload.index < prevState.length) {
                newState = [...prevState];

                try {
                    newState.splice(action.payload.index, 1);
                } catch (error) { // it is not a valid number
                    newState = prevState;
                }
            }
            break;
        case CLEAR_RESULTS_ACTION:
            newState = [];
            break;
    }

    return newState
}
