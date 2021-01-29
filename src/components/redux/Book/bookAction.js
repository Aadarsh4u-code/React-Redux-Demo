import {BUY_BOOK} from '../Book/bookType';

//2.action function is defined
export const buyBook = (number=1) => {
  return {
    type: BUY_BOOK,
    payload: number
  }
}