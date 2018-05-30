import { delay } from "redux-saga";
import { put, call, select, take, fork } from "redux-saga/effects";
import {
  catSoundPlay,
  chickenSoundPlay,
  cowSoundPlay,
  dogSoundPlay,
  duckSoundPlay,
  sheepSoundPlay,
  musicPlay,
  musicStop
} from "../logic/sound";
import {
  changeIsMusicOn,
  chickenSoundPlayingTrue,
  chickenSoundPlayingFalse,
  cowSoundPlayingTrue,
  cowSoundPlayingFalse,
  catSoundPlayingTrue,
  catSoundPlayingFalse,
  dogSoundPlayingTrue,
  dogSoundPlayingFalse,
  duckSoundPlayingTrue,
  duckSoundPlayingFalse,
  sheepSoundPlayingTrue,
  sheepSoundPlayingFalse
} from "../actions/settings";

export function* watchPlayCatSound() {
  while (true) {
    yield take("PLAY_CAT_SOUND");
    yield put(catSoundPlayingTrue());
    yield fork(catSoundPlay);
    yield call(delay, 2000);
    yield put(catSoundPlayingFalse());
  }
}

export function* watchPlayChickenSound() {
  while (true) {
    yield take("PLAY_CHICKEN_SOUND");
    yield put(chickenSoundPlayingTrue());
    yield fork(chickenSoundPlay);
    yield call(delay, 2000);
    yield put(chickenSoundPlayingFalse());
  }
}

export function* watchPlayCowSound() {
  while (true) {
    yield take("PLAY_COW_SOUND");
    yield put(cowSoundPlayingTrue());
    yield fork(cowSoundPlay);
    yield call(delay, 2000);
    yield put(cowSoundPlayingFalse());
  }
}

export function* watchPlayDogSound() {
  while (true) {
    yield take("PLAY_DOG_SOUND");
    yield put(dogSoundPlayingTrue());
    yield fork(dogSoundPlay);
    yield call(delay, 1200);
    yield put(dogSoundPlayingFalse());
  }
}

export function* watchPlayDuckSound() {
  while (true) {
    yield take("PLAY_DUCK_SOUND");
    yield put(duckSoundPlayingTrue());
    yield fork(duckSoundPlay);
    yield call(delay, 700);
    yield put(duckSoundPlayingFalse());
  }
}

export function* watchPlaySheepSound() {
  while (true) {
    yield take("PLAY_SHEEP_SOUND");
    yield put(sheepSoundPlayingTrue());
    yield fork(sheepSoundPlay);
    yield call(delay, 1200);
    yield put(sheepSoundPlayingFalse());
  }
}

// export function* watchPlayMusicStart() {
//   yield take("START_PLAY_MUSIC");
//   const {
//     settings: { isMusicOn }
//   } = yield select();
//   if (isMusicOn) yield call(musicPlay);
// }

// export function* watchPlayMusicChange() {
//   while (true) {
//     yield put(changeIsMusicOn());
//     const {
//       settings: { isMusicOn }
//     } = yield select();
//     if (isMusicOn) {
//       yield fork(musicPlay);
//     } else {
//       yield fork(musicStop);
//     }
//   }
// }
