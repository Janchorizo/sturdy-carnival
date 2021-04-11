import { combineReducers } from 'redux';

import { examsReducer } from './examsReducer';
import { markBreaksReducer } from './markBreaksReducer';


export const appReducer = combineReducers({
    exams: examsReducer,
    markBreaks: markBreaksReducer,
});
