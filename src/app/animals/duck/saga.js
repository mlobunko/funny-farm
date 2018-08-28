import { delay } from 'redux-saga';
import { put, call, take, fork } from 'redux-saga/effects';

import clickedAnimal from 'shared/clickedAnimal';

import * as t from './actionTypes';
import * as actions from './actions';
import * as model from './model';
import { NAME } from './constants';

export function* watchPlaySound() {
  while (true) {
    yield take(t.PLAY_SOUND);
    yield put(actions.playingOn());
    yield put(clickedAnimal.actions.set(NAME));
    yield fork(model.playSound);
    yield call(delay, 700);
    yield fork(model.playSound);
    yield call(delay, 700);
    yield put(actions.playingOff());
  }
}
