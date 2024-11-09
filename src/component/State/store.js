import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import for redux-thunk

import { authReducer } from './Authentication/Reducer';  // Make sure the path is correct

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Apply redux-thunk middleware
);
