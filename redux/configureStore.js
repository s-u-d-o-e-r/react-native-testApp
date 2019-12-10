import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, logger),
  );
}
