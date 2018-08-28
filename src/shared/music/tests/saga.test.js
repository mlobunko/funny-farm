import { delay } from 'redux-saga';
import { expectSaga } from 'redux-saga-test-plan';

import * as actions from '../actions';
import { NAME } from '../constants';
import * as model from '../model';
import { watchClick, watchStart } from '../saga';

describe('watchClick', () => {
  it('should call play', () => {
    const storeState = {
      [NAME]: true
    };
    return expectSaga(watchStart)
      .withState(storeState)
      .call(model.play)
      .dispatch(actions.start())
      .run();
  });

  it('should not call play', () => {
    const storeState = {
      [NAME]: false
    };
    return expectSaga(watchStart)
      .withState(storeState)
      .not.call(model.play)
      .dispatch(actions.start())
      .run();
  });
});

describe('watchClick', () => {
  it('should call play', () => {
    const storeState = {
      [NAME]: true
    };

    return expectSaga(watchClick)
      .withState(storeState)
      .call(delay, 10)
      .put(actions.toggle())
      .call(model.play)
      .dispatch(actions.click())
      .silentRun();
  });

  it('should not call play', () => {
    const storeState = {
      [NAME]: false
    };

    return expectSaga(watchClick)
      .withState(storeState)
      .call(delay, 10)
      .put(actions.toggle())
      .call(model.stop)
      .dispatch(actions.click())
      .silentRun();
  });
});
