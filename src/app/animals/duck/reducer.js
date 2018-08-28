import * as t from './actionTypes';

export const initialState = {
  isPlaying: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.PLAING_ON:
      return {
        isPlaying: true
      };
    case t.PLAYING_OFF:
      return {
        isPlaying: false
      };
    default:
      return state;
  }
};
