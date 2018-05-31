import settings from "../../reducers/settings";
import { settingsReducerDefaultState } from "../../reducers/settings";
import {
  landscapeOn,
  landscapeOff,
  changeIsMusicOn,
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
  chickenSoundPlayingTrue,
  chickenSoundPlayingFalse,
  clickedAnimalCat,
  clickedAnimalChicken,
  clickedAnimalCow,
  clickedAnimalDog,
  clickedAnimalDuck,
  clickedAnimalSheep,
  clickedAnimalNull
} from "../../actions/settings";

it("should set default state", () => {
  const state = settings(undefined, { type: "@@INIT" });
  expect(state).toEqual(settingsReducerDefaultState);
});

it("should put landscape to off", () => {
  const newState = {
    ...settingsReducerDefaultState,
    isLandscape: true
  };
  const state = settings(undefined, landscapeOff());
  expect(state).toEqual({ ...settingsReducerDefaultState, isLandscape: false });
});

it("should put landscape to on", () => {
  const state = settings(undefined, landscapeOn());
  expect(state).toEqual({ ...settingsReducerDefaultState, isLandscape: true });
});

it("should change isMusicOn", () => {
  const state = settings(undefined, changeIsMusicOn());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isMusicOn: false
  });
});

it("should set isCowSoundPlaying to true", () => {
  const state = settings(undefined, cowSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isCowSoundPlaying: true
  });
});

it("should set isCowSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isCowSoundPlaying: true
  };
  const state = settings(defaultState, cowSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isCowSoundPlaying: false
  });
});

it("should set isCatSoundPlaying to true", () => {
  const state = settings(undefined, catSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isCatSoundPlaying: true
  });
});

it("should set isCatSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isCatSoundPlaying: true
  };
  const state = settings(defaultState, catSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isCatSoundPlaying: false
  });
});

it("should set isDogSoundPlaying to true", () => {
  const state = settings(undefined, dogSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isDogSoundPlaying: true
  });
});

it("should set isDogSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isDogSoundPlaying: true
  };
  const state = settings(defaultState, dogSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isDogSoundPlaying: false
  });
});

it("should set isDuckSoundPlaying to true", () => {
  const state = settings(undefined, duckSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isDuckSoundPlaying: true
  });
});

it("should set isDuckSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isDuckSoundPlaying: true
  };
  const state = settings(defaultState, duckSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isDuckSoundPlaying: false
  });
});

it("should set isSheepSoundPlaying to true", () => {
  const state = settings(undefined, sheepSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isSheepSoundPlaying: true
  });
});

it("should set isSheepSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isSheepSoundPlaying: true
  };
  const state = settings(defaultState, sheepSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isSheepSoundPlaying: false
  });
});

it("should set isChickenSoundPlaying to true", () => {
  const state = settings(undefined, chickenSoundPlayingTrue());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isChickenSoundPlaying: true
  });
});

it("should set isChickenSoundPlaying to false", () => {
  const defaultState = {
    ...settingsReducerDefaultState,
    isChickenSoundPlaying: true
  };
  const state = settings(defaultState, chickenSoundPlayingFalse());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    isChickenSoundPlaying: false
  });
});

it("should set clickedAnimal to 'CAT'", () => {
  const state = settings(undefined, clickedAnimalCat());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "CAT"
  });
});

it("should set clickedAnimal to 'COW'", () => {
  const state = settings(undefined, clickedAnimalCow());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "COW"
  });
});

it("should set clickedAnimal to 'CHICKEN'", () => {
  const state = settings(undefined, clickedAnimalChicken());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "ROOSTER"
  });
});

it("should set clickedAnimal to 'DOG'", () => {
  const state = settings(undefined, clickedAnimalDog());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "DOG"
  });
});

it("should set clickedAnimal to 'DUCK'", () => {
  const state = settings(undefined, clickedAnimalDuck());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "DUCK"
  });
});

it("should set clickedAnimal to 'SHEEP'", () => {
  const state = settings(undefined, clickedAnimalSheep());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: "SHEEP"
  });
});

it("should set clickedAnimal to null", () => {
  const state = settings(undefined, clickedAnimalNull());
  expect(state).toEqual({
    ...settingsReducerDefaultState,
    clickedAnimal: null
  });
});
