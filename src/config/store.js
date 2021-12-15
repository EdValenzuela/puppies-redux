import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from 'redux-thunk';
import * as reducers from '../reducers';


const userPersistConfig = {
    key: 'user',
    storage,
}

//const rootReducer = combineReducers(reducers);

const rootReducer = combineReducers({
    ...reducers,
    user: persistReducer(userPersistConfig, reducers.user)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);