import {BUY_BOOK} from '../Book/bookType';

//3. create initial state of app
const initialState = {
  numberOfBook: 20
};

//4. create redux and pass prevState and action and it will give new state
const bookReducer = (state= initialState, action) => {
  switch(action.type) {
    case BUY_BOOK: return {
      ...state,
      numberOfBook: state.numberOfBook - action.payload
    }
    default: return state;
  }
}
export default bookReducer;