import { all, call, spawn } from 'redux-saga/effects';

import clickedAnimal from 'shared/clickedAnimal';
import music from 'shared/music';
import cat from 'app/animals/cat';
import cow from 'app/animals/cow';
import dog from 'app/animals/dog';
import duck from 'app/animals/duck';
import rooster from 'app/animals/rooster';
import sheep from 'app/animals/sheep';

export default function* rootSaga() {
  const sagas = [
    clickedAnimal.saga.watchSet,
    music.saga.watchStart,
    music.saga.watchClick,
    cat.saga.watchPlaySound,
    cow.saga.watchPlaySound,
    dog.saga.watchPlaySound,
    duck.saga.watchPlaySound,
    rooster.saga.watchPlaySound,
    sheep.saga.watchPlaySound
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
