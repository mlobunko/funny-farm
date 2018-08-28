import * as t from '../actionTypes';
import { playingOff, playingOn, playSound } from '../actions';

describe('playingOff', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.PLAYING_OFF
    };
    expect(playingOff()).toEqual(expectedAction);
  });
});

describe('playingOn', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.PLAING_ON
    };
    expect(playingOn()).toEqual(expectedAction);
  });
});

describe('playSound', () => {
  it('should return an action', () => {
    const expectedAction = {
      type: t.PLAY_SOUND
    };
    expect(playSound()).toEqual(expectedAction);
  });
});
