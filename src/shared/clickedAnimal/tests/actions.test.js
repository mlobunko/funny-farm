import * as t from '../actionTypes';
import { set } from '../actions';

describe('set', () => {
  it('should return action', () => {
    const name = 'name';
    const expectedAction = {
      type: t.SET,
      name: 'NAME'
    };
    expect(set(name)).toEqual(expectedAction);
  });
});
