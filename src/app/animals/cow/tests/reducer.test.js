import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.PLAING_ON}`, () => {
    const action = {
      type: t.PLAING_ON
    };
    const expectedState = {
      isPlaying: true
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it(`should handle ${t.PLAYING_OFF}`, () => {
    const state = {
      isPlaying: true
    };
    const action = {
      type: t.PLAYING_OFF
    };
    const expectedState = {
      isPlaying: false
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
