import {BUY_BOOK} from '../Book/bookType';

//2.action function is defined
export const buyBook = () => {
  return {
    type: BUY_BOOK,
    payload: 'first action'
  }
}