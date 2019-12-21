import {BUY_BOOK} from './bookTypes';

const initialState = {
    numOfBooks : 20
}

const bookReducer = (state = initialState,action) => {
  //  console.log('coming==' + action.type)
  switch(action.type){
      case BUY_BOOK: return{
          ...state,
          numOfBooks: state.numOfBooks - 1
      }
      default: return state
  }
}
export default bookReducer;