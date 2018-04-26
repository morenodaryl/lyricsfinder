import { createStore, combineReducers, applyMiddleware } from "redux";
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'root', storage }

const persistedReducer = persistReducer(persistConfig, combineReducers({ main: mainReducer }));
export let store = createStore(persistedReducer, {}, applyMiddleware(logger, thunk));
export let persistor = persistStore(store);

// export default createStore(combineReducers({ main: mainReducer }), {}, applyMiddleware(logger, thunk));