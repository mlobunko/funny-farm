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

it("should create an action LANDSCAPE_ON", () => {
  const expectedAction = {
    type: "LANDSCAPE_ON"
  };
  expect(landscapeOn()).toEqual(expectedAction);
});

it("should create an action LANDSCAPE_OFF", () => {
  const expectedAction = {
    type: "LANDSCAPE_OFF"
  };
  expect(landscapeOff()).toEqual(expectedAction);
});

it("should create an action CHANGE_IS_MUSIC_ON", () => {
  const expectedAction = {
    type: "CHANGE_IS_MUSIC_ON"
  };
  expect(changeIsMusicOn()).toEqual(expectedAction);
});

it("should create an action COW_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "COW_SOUND_PLAYING_TRUE"
  };
  expect(cowSoundPlayingTrue()).toEqual(expectedAction);
});

it("should create an action COW_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "COW_SOUND_PLAYING_FALSE"
  };
  expect(cowSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action CAT_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "CAT_SOUND_PLAYING_TRUE"
  };
  expect(catSoundPlayingTrue()).toEqual(expectedAction);
});

it("should create an action CAT_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "CAT_SOUND_PLAYING_FALSE"
  };
  expect(catSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action DOG_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "DOG_SOUND_PLAYING_TRUE"
  };
  expect(dogSoundPlayingTrue()).toEqual(expectedAction);
});

it("should create an action DOG_SOUND_PLAYING_FALSE", () => {
  const expectedAction = {
    type: "DOG_SOUND_PLAYING_FALSE"
  };
  expect(dogSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action DUCK_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "DUCK_SOUND_PLAYING_FALSE"
  };
  expect(duckSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action DUCK_SOUND_PLAYING_FALSE", () => {
  const expectedAction = {
    type: "DUCK_SOUND_PLAYING_FALSE"
  };
  expect(duckSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action SHEEP_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "SHEEP_SOUND_PLAYING_FALSE"
  };
  expect(sheepSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action SHEEP_SOUND_PLAYING_FALSE", () => {
  const expectedAction = {
    type: "SHEEP_SOUND_PLAYING_FALSE"
  };
  expect(sheepSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action CHICKEN_SOUND_PLAYING_TRUE", () => {
  const expectedAction = {
    type: "CHICKEN_SOUND_PLAYING_FALSE"
  };
  expect(chickenSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action CHICKEN_SOUND_PLAYING_FALSE", () => {
  const expectedAction = {
    type: "CHICKEN_SOUND_PLAYING_FALSE"
  };
  expect(chickenSoundPlayingFalse()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_CAT", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_CAT"
  };
  expect(clickedAnimalCat()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_CHICKEN", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_CHICKEN"
  };
  expect(clickedAnimalChicken()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_COW", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_COW"
  };
  expect(clickedAnimalCow()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_DOG", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_DOG"
  };
  expect(clickedAnimalDog()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_DUCK", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_DUCK"
  };
  expect(clickedAnimalDuck()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_SHEEP", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_SHEEP"
  };
  expect(clickedAnimalSheep()).toEqual(expectedAction);
});

it("should create an action CLICKED_ANIMAL_NULL", () => {
  const expectedAction = {
    type: "CLICKED_ANIMAL_NULL"
  };
  expect(clickedAnimalNull()).toEqual(expectedAction);
});
