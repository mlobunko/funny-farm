import { delay } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';

import cat from 'app/animals/cat';
import cow from 'app/animals/cow';
import dog from 'app/animals/dog';
import duck from 'app/animals/duck';
import rooster from 'app/animals/rooster';
import sheep from 'app/animals/sheep';

import * as actions from './actions';

export function* setNull() {
  yield call(delay, 4000);
  yield put(actions.set(''));
}

export function* watchSet() {
  yield takeLatest(
    [
      cat.t.PLAY_SOUND,
      cow.t.PLAY_SOUND,
      dog.t.PLAY_SOUND,
      duck.t.PLAY_SOUND,
      rooster.t.PLAY_SOUND,
      sheep.t.PLAY_SOUND
    ],
    setNull
  );
}
