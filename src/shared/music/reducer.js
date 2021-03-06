import * as t from './actionTypes';

export const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.TOGGLE:
      return !state;
    default:
      return state;
  }
};
