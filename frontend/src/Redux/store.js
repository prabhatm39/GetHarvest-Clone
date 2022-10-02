import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { timeReducer } from './Timer/timer.reducer';
import {reducer} from "./expenseReducer/reducer"

const rootReducer = combineReducers({ time: timeReducer,expenses: reducer});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));