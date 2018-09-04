import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`sould handle ${t.TOGGLE}`, () => {
    const expectedState = false;
    const state = true;
    const action = {
      type: t.TOGGLE
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
