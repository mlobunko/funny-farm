import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.SET}`, () => {
    const name = 'NAME';
    const action = {
      type: t.SET,
      name
    };
    expect(reducer(undefined, action)).toEqual(name);
  });
});
