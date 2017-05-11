import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initState){
  return createStore( rootReducer, initState,
    composeEnhancers(applyMiddleware(thunkMiddleware,loggerMiddleware))
  )
}
