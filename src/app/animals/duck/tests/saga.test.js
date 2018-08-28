import { delay } from 'redux-saga';
import { testSaga } from 'redux-saga-test-plan';

import clickedAnimal from 'shared/clickedAnimal';

import * as t from '../actionTypes';
import * as actions from '../actions';
import * as model from '../model';
import { NAME } from '../constants';

import { watchPlaySound } from '../saga';

describe('watchPlaySound', () => {
  it('call correctly', () => {
    testSaga(watchPlaySound)
      .next()
      .take(t.PLAY_SOUND)
      .next()
      .put(actions.playingOn())
      .next()
      .put(clickedAnimal.actions.set(NAME))
      .next()
      .fork(model.playSound)
      .next()
      .call(delay, 700)
      .next()
      .fork(model.playSound)
      .next()
      .call(delay, 700)
      .next()
      .put(actions.playingOff())
      .next()
      .finish()
      .next()
      .isDone();
  });
});
