import { delay } from 'redux-saga';
import { put, call, select, take } from 'redux-saga/effects';

import * as t from './actionTypes';
import * as actions from './actions';
import * as model from './model';
import * as selectors from './selectors';

export function* watchStart() {
  yield take(t.START);
  const music = yield select(selectors.getAll);
  if (music) yield call(model.play);
}

export function* watchClick() {
  while (true) {
    yield take(t.CLICK);
    yield call(delay, 10);
    yield put(actions.toggle());
    const music = yield select(selectors.getAll);
    if (music) {
      yield call(model.play);
    } else {
      yield call(model.stop);
    }
  }
}
