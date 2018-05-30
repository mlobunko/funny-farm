import { delay } from "redux-saga";
import { put, call, select, take, all, fork } from "redux-saga/effects";
import {
  watchPlayCatSound,
  watchPlayChickenSound,
  watchPlayCowSound,
  watchPlayDogSound,
  watchPlayDuckSound,
  watchPlaySheepSound
  // watchPlayMusicStart,
  // watchPlayMusicChange
} from "./watchers";

export default function* rootSaga() {
  yield all([
    fork(watchPlayCatSound),
    fork(watchPlayChickenSound),
    fork(watchPlayCowSound),
    fork(watchPlayDogSound),
    fork(watchPlayDuckSound),
    fork(watchPlaySheepSound)
    // fork(watchPlayMusicStart),
    // fork(watchPlayMusicChange)
  ]);
}
