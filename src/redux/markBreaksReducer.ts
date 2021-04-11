import { ReduxAction } from "./types";
import {
    SET_BREAK_ACTION,
} from './markBreaksActions';


const initialState: object = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
};

function hasParam (action: ReduxAction, key: string): boolean {
    return Object.hasOwnProperty.call(action.payload, key);
}

export function markBreaksReducer(prevState=initialState, action: ReduxAction) {
    let newState = prevState;

    switch(action.type) {
        case SET_BREAK_ACTION:
            if (hasParam(action, 'mark') && hasParam(action, 'score')) {
                newState = {...prevState, [action.payload.mark]: action.payload.score};
            }
            break;
    }

    return newState
}
