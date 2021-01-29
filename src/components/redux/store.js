import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './Book/bookReducer';

//5. create store and pass reducer to it
const store = createStore(bookReducer, applyMiddleware(logger));

export default store;