import { all, fork } from "redux-saga/effects";
import {
  watchPlayCatSound,
  watchPlayChickenSound,
  watchPlayCowSound,
  watchPlayDogSound,
  watchPlayDuckSound,
  watchPlaySheepSound,
  watchPlayMusicStart,
  watchPlayMusicChange,
  watchClickedAnimal
} from "./watchers";

export default function* rootSaga() {
  yield all([
    fork(watchPlayCatSound),
    fork(watchPlayChickenSound),
    fork(watchPlayCowSound),
    fork(watchPlayDogSound),
    fork(watchPlayDuckSound),
    fork(watchPlaySheepSound),
    fork(watchPlayMusicStart),
    fork(watchPlayMusicChange),
    fork(watchClickedAnimal)
  ]);
}
