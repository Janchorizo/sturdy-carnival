import { ReduxAction } from "./types";
import {
    SET_CDF_ACTION,
    CLEAR_CDF_ACTION,
} from './cdfActions';


const initialState: number[] = [];

function hasParam (action: ReduxAction, key: string): boolean {
    return Object.hasOwnProperty.call(action.payload, key);
}

export function cdfReducer(prevState=initialState, action: ReduxAction) {
    let newState = prevState;

    switch(action.type) {
        case SET_CDF_ACTION:
            if (hasParam(action, 'cdf')) {
                try {
                    newState = [...action.payload.cdf];
                } catch (error) { // it is not an iterable
                    newState = prevState;
                }
            }
            break;
        case CLEAR_CDF_ACTION:
            newState = [];
            break;
    }

    return newState
}
