import { delay } from "redux-saga";
import {
  put,
  call,
  select,
  take,
  fork,
  takeLatest,
  cancel
} from "redux-saga/effects";
import { createMockTask } from "redux-saga/utils";
import {
  catSoundPlay,
  chickenSoundPlay,
  cowSoundPlay,
  dogSoundPlay,
  duckSoundPlay,
  sheepSoundPlay,
  musicPlay,
  musicStop
} from "../../logic/sound";
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
} from "../../actions/settings";

import {
  toClickedAnimalNull,
  watchClickedAnimal,
  watchPlayCatSound,
  watchPlayChickenSound,
  watchPlayCowSound,
  watchPlayDogSound,
  watchPlayDuckSound,
  watchPlayMusicChange,
  watchPlayMusicStart,
  watchPlaySheepSound
} from "../../saga/watchers";

const defaultState = {
  settings: {
    isLandscape: false,
    isMusicOn: true,
    isCowSoundPlaying: false,
    isCatSoundPlaying: false,
    isDogSoundPlaying: false,
    isDuckSoundPlaying: false,
    isSheepSoundPlaying: false,
    isChickenSoundPlaying: false,
    clickedAnimal: null
  }
};

it("should correctly execute toClickedAnimalNull()", () => {
  const gen = toClickedAnimalNull();
  expect(gen.next().value).toEqual(call(delay, 4000));
  expect(gen.next().value).toEqual(put(clickedAnimalNull()));
  expect(gen.next().done).toEqual(true);
});

it("should correctly execute watchClickedAnimal()", () => {
  const lastTask = createMockTask();
  const gen = watchClickedAnimal();
  expect(gen.next(lastTask).value).toEqual(
    take([
      "PLAY_CAT_SOUND",
      "PLAY_CHICKEN_SOUND",
      "PLAY_COW_SOUND",
      "PLAY_DOG_SOUND",
      "PLAY_DUCK_SOUND",
      "PLAY_SHEEP_SOUND"
    ])
  );
  expect(gen.next().value).toEqual(fork(toClickedAnimalNull));
  expect(gen.next(lastTask).value).toEqual(
    take([
      "PLAY_CAT_SOUND",
      "PLAY_CHICKEN_SOUND",
      "PLAY_COW_SOUND",
      "PLAY_DOG_SOUND",
      "PLAY_DUCK_SOUND",
      "PLAY_SHEEP_SOUND"
    ])
  );
  expect(gen.next().value).toEqual(cancel(lastTask));
});

it("should correctly execute watchPlayCatSound()", () => {
  const gen = watchPlayCatSound();
  expect(gen.next().value).toEqual(take("PLAY_CAT_SOUND"));
  expect(gen.next().value).toEqual(put(catSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalCat()));
  expect(gen.next().value).toEqual(fork(catSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 1400));
  expect(gen.next().value).toEqual(put(catSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayChickenSound()", () => {
  const gen = watchPlayChickenSound();
  expect(gen.next().value).toEqual(take("PLAY_CHICKEN_SOUND"));
  expect(gen.next().value).toEqual(put(chickenSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalChicken()));
  expect(gen.next().value).toEqual(fork(chickenSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 2000));
  expect(gen.next().value).toEqual(put(chickenSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayCowSound()", () => {
  const gen = watchPlayCowSound();
  expect(gen.next().value).toEqual(take("PLAY_COW_SOUND"));
  expect(gen.next().value).toEqual(put(cowSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalCow()));
  expect(gen.next().value).toEqual(fork(cowSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 2000));
  expect(gen.next().value).toEqual(put(cowSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayDogSound()", () => {
  const gen = watchPlayDogSound();
  expect(gen.next().value).toEqual(take("PLAY_DOG_SOUND"));
  expect(gen.next().value).toEqual(put(dogSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalDog()));
  expect(gen.next().value).toEqual(fork(dogSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 1200));
  expect(gen.next().value).toEqual(put(dogSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayDuckSound()", () => {
  const gen = watchPlayDuckSound();
  expect(gen.next().value).toEqual(take("PLAY_DUCK_SOUND"));
  expect(gen.next().value).toEqual(put(duckSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalDuck()));
  expect(gen.next().value).toEqual(fork(duckSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 700));
  expect(gen.next().value).toEqual(fork(duckSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 700));
  expect(gen.next().value).toEqual(put(duckSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlaySheepSound()", () => {
  const gen = watchPlaySheepSound();
  expect(gen.next().value).toEqual(take("PLAY_SHEEP_SOUND"));
  expect(gen.next().value).toEqual(put(sheepSoundPlayingTrue()));
  expect(gen.next().value).toEqual(put(clickedAnimalSheep()));
  expect(gen.next().value).toEqual(fork(sheepSoundPlay));
  expect(gen.next().value).toEqual(call(delay, 1200));
  expect(gen.next().value).toEqual(put(sheepSoundPlayingFalse()));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayMusicStart() if isMusicOn true", () => {
  const state = {
    ...defaultState
  };
  const gen = watchPlayMusicStart();
  expect(gen.next().value).toEqual(take("START_PLAY_MUSIC"));
  expect(gen.next().value).toEqual(select());
  expect(gen.next(state).value).toEqual(fork(musicPlay));
  expect(gen.next().done).toEqual(true);
});

it("should correctly execute watchPlayMusicStart() if isMusicOn false", () => {
  const state = {
    ...defaultState,
    settings: {
      isMusicOn: false
    }
  };
  const gen = watchPlayMusicStart();
  expect(gen.next().value).toEqual(take("START_PLAY_MUSIC"));
  expect(gen.next().value).toEqual(select());
  expect(gen.next(state).done).toEqual(true);
});

it("should correctly execute watchPlayMusicChange() if isMusicOn false", () => {
  const state = {
    ...defaultState,
    settings: {
      isMusicOn: false
    }
  };
  const gen = watchPlayMusicChange();
  expect(gen.next().value).toEqual(take("CHANGE_PLAY_MUSIC"));
  expect(gen.next().value).toEqual(call(delay, 5));
  expect(gen.next().value).toEqual(put(changeIsMusicOn()));
  expect(gen.next().value).toEqual(select());
  expect(gen.next(state).value).toEqual(fork(musicStop));
  expect(gen.next().done).toEqual(false);
});

it("should correctly execute watchPlayMusicChange() if isMusicOn true", () => {
  const state = {
    ...defaultState,
    settings: {
      isMusicOn: true
    }
  };
  const gen = watchPlayMusicChange();
  expect(gen.next().value).toEqual(take("CHANGE_PLAY_MUSIC"));
  expect(gen.next().value).toEqual(call(delay, 5));
  expect(gen.next().value).toEqual(put(changeIsMusicOn()));
  expect(gen.next().value).toEqual(select());
  expect(gen.next(state).value).toEqual(fork(musicPlay));
  expect(gen.next().done).toEqual(false);
});
