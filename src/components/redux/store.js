import { createStore } from 'redux';
import bookReducer from './Book/bookReducer';

//5. create store and pass reducer to it
const store = createStore(bookReducer);

export default store;