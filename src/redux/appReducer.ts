import { combineReducers } from 'redux';

import { examsReducer } from './examsReducer';
import { cdfReducer } from './cdfReducer';


export const appReducer = combineReducers({
    exams: examsReducer,
    // cdf: cdfReducer,
});
