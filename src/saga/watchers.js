import { delay } from "redux-saga";
import { put, call, select, take, fork, cancel } from "redux-saga/effects";
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
  sheepSoundPlayingFalse,
  clickedAnimalCat,
  clickedAnimalChicken,
  clickedAnimalCow,
  clickedAnimalDog,
  clickedAnimalDuck,
  clickedAnimalSheep,
  clickedAnimalNull
} from "../actions/settings";

export function* toClickedAnimalNull() {
  yield call(delay, 4000);
  yield put(clickedAnimalNull());
}

export function* watchClickedAnimal() {
  let lastTask;
  while (true) {
    yield take([
      "PLAY_CAT_SOUND",
      "PLAY_CHICKEN_SOUND",
      "PLAY_COW_SOUND",
      "PLAY_DOG_SOUND",
      "PLAY_DUCK_SOUND",
      "PLAY_SHEEP_SOUND"
    ]);
    if (lastTask) yield cancel(lastTask);
    lastTask = yield fork(toClickedAnimalNull);
  }
}

export function* watchPlayCatSound() {
  while (true) {
    yield take("PLAY_CAT_SOUND");
    yield put(catSoundPlayingTrue());
    yield put(clickedAnimalCat());
    yield fork(catSoundPlay);
    yield call(delay, 1400);
    yield put(catSoundPlayingFalse());
  }
}

export function* watchPlayChickenSound() {
  while (true) {
    yield take("PLAY_CHICKEN_SOUND");
    yield put(chickenSoundPlayingTrue());
    yield put(clickedAnimalChicken());
    yield fork(chickenSoundPlay);
    yield call(delay, 2000);
    yield put(chickenSoundPlayingFalse());
  }
}

export function* watchPlayCowSound() {
  while (true) {
    yield take("PLAY_COW_SOUND");
    yield put(cowSoundPlayingTrue());
    yield put(clickedAnimalCow());
    yield fork(cowSoundPlay);
    yield call(delay, 2000);
    yield put(cowSoundPlayingFalse());
  }
}

export function* watchPlayDogSound() {
  while (true) {
    yield take("PLAY_DOG_SOUND");
    yield put(dogSoundPlayingTrue());
    yield put(clickedAnimalDog());
    yield fork(dogSoundPlay);
    yield call(delay, 1200);
    yield put(dogSoundPlayingFalse());
  }
}

export function* watchPlayDuckSound() {
  while (true) {
    yield take("PLAY_DUCK_SOUND");
    yield put(duckSoundPlayingTrue());
    yield put(clickedAnimalDuck());
    yield fork(duckSoundPlay);
    yield call(delay, 700);
    yield fork(duckSoundPlay);
    yield call(delay, 700);
    yield put(duckSoundPlayingFalse());
  }
}

export function* watchPlaySheepSound() {
  while (true) {
    yield take("PLAY_SHEEP_SOUND");
    yield put(sheepSoundPlayingTrue());
    yield put(clickedAnimalSheep());
    yield fork(sheepSoundPlay);
    yield call(delay, 1200);
    yield put(sheepSoundPlayingFalse());
  }
}

export function* watchPlayMusicStart() {
  yield take("START_PLAY_MUSIC");
  const {
    settings: { isMusicOn }
  } = yield select();
  if (isMusicOn) yield fork(musicPlay);
}

export function* watchPlayMusicChange() {
  while (true) {
    yield take("CHANGE_PLAY_MUSIC");
    yield call(delay, 5);
    yield put(changeIsMusicOn());
    const {
      settings: { isMusicOn }
    } = yield select();
    if (isMusicOn) {
      yield fork(musicPlay);
    } else {
      yield fork(musicStop);
    }
  }
}
