/* eslint-disable @typescript-eslint/no-namespace */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { UserReducer } from './user';
import { IRootState } from './state';
import { AuthReducer } from './auth';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
    user: UserReducer as any,
    auth: AuthReducer as any,
});

export default rootReducer;