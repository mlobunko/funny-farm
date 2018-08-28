import { NAME } from '../constants';
import { getIsPlaying } from '../selectors';

describe('getIsPlaying', () => {
  it('should return the right state', () => {
    const state = {
      [NAME]: {
        isPlaying: true
      }
    };
    expect(getIsPlaying(state)).toEqual(true);
  });
});
