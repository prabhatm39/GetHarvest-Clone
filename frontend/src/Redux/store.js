import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from "./expenseReducer/reducer"


const rootReducer = combineReducers({    
    
    expenses: reducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
