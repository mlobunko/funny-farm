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
} from "../../saga/watchers";
import rootSaga from "../../saga/rootSaga";

it("rootSaga should call all", () => {
  const gen = rootSaga();
  expect(gen.next().value).toEqual(
    all([
      fork(watchPlayCatSound),
      fork(watchPlayChickenSound),
      fork(watchPlayCowSound),
      fork(watchPlayDogSound),
      fork(watchPlayDuckSound),
      fork(watchPlaySheepSound),
      fork(watchPlayMusicStart),
      fork(watchPlayMusicChange),
      fork(watchClickedAnimal)
    ])
  );
});
