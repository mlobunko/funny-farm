import { delay } from 'redux-saga';
import { testSaga } from 'redux-saga-test-plan';

import cat from 'app/animals/cat';
import cow from 'app/animals/cow';
import dog from 'app/animals/dog';
import duck from 'app/animals/duck';
import rooster from 'app/animals/rooster';
import sheep from 'app/animals/sheep';

import * as actions from '../actions';
import { setNull, watchSet } from '../saga';

describe('setNull', () => {
  it('call properly', () => {
    testSaga(setNull)
      .next()
      .call(delay, 4000)
      .next()
      .put(actions.set(''))
      .next()
      .isDone();
  });
});

describe('watchSet', () => {
  it('call properly, cancel lastTask', () => {
    testSaga(watchSet)
      .next()
      .takeLatestEffect(
        [
          cat.t.PLAY_SOUND,
          cow.t.PLAY_SOUND,
          dog.t.PLAY_SOUND,
          duck.t.PLAY_SOUND,
          rooster.t.PLAY_SOUND,
          sheep.t.PLAY_SOUND
        ],
        setNull
      )
      .next()
      .isDone();
  });
});
