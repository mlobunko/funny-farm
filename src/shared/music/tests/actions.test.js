import * as t from '../actionTypes';
import { start, click, toggle } from '../actions';

describe('start', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.START
    };
    expect(start()).toEqual(expectedAction);
  });
});

describe('click', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.CLICK
    };
    expect(click()).toEqual(expectedAction);
  });
});

describe('clcik', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.TOGGLE
    };
    expect(toggle()).toEqual(expectedAction);
  });
});
