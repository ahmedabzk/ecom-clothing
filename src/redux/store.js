import { createStore, applyMiddleware } from 'redux';
import { persistStore} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'production') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};
