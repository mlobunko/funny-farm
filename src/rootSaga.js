import { all, fork } from 'redux-saga/effects';
import clickedAnimal from 'shared/clickedAnimal';
import music from 'shared/music';
import cat from 'app/animals/cat';
import cow from 'app/animals/cow';
import dog from 'app/animals/dog';
import duck from 'app/animals/duck';
import rooster from 'app/animals/rooster';
import sheep from 'app/animals/sheep';

export default function* rootSaga() {
  yield all([
    fork(clickedAnimal.saga.watchSet),
    fork(music.saga.watchStart),
    fork(music.saga.watchClick),
    fork(cat.saga.watchPlaySound),
    fork(cow.saga.watchPlaySound),
    fork(dog.saga.watchPlaySound),
    fork(duck.saga.watchPlaySound),
    fork(rooster.saga.watchPlaySound),
    fork(sheep.saga.watchPlaySound)
  ]);
}
