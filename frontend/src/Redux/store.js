import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { timeReducer } from './Timer/timer.reducer';


const rootReducer = combineReducers({ time: timeReducer});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));