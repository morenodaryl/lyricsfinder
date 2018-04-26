import { createStore, combineReducers, applyMiddleware } from "redux";
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(combineReducers({ main: mainReducer }), {}, applyMiddleware(logger, thunk));