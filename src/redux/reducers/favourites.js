import { FAVOURITE_DATA } from '../actions';

const favouriteReducer = (state = {}, action) => {
  switch (action.type) {
    case FAVOURITE_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default favouriteReducer;
