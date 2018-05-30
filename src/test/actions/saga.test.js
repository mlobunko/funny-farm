//testings action sounds
import {
  playCowSound,
  playCatSound,
  playDogSound,
  playDuckSound,
  playSheepSound,
  playChickenSound
} from "../../actions/saga";

it("should create action PLAY_COW_SOUND", () => {
  const expectedAction = {
    type: "PLAY_COW_SOUND"
  };
  expect(playCowSound()).toEqual(expectedAction);
});

it("should create action PLAY_CAT_SOUND", () => {
  const expectedAction = {
    type: "PLAY_CAT_SOUND"
  };
  expect(playCatSound()).toEqual(expectedAction);
});

it("should create action PLAY_DOG_SOUND", () => {
  const expectedAction = {
    type: "PLAY_DOG_SOUND"
  };
  expect(playDogSound()).toEqual(expectedAction);
});

it("should create action PLAY_DUCK_SOUND", () => {
  const expectedAction = {
    type: "PLAY_DUCK_SOUND"
  };
  expect(playDuckSound()).toEqual(expectedAction);
});

it("should create action PLAY_SHEEP_SOUND", () => {
  const expectedAction = {
    type: "PLAY_SHEEP_SOUND"
  };
  expect(playSheepSound()).toEqual(expectedAction);
});

it("should create action PLAY_CHICKEN_SOUND", () => {
  const expectedAction = {
    type: "PLAY_CHICKEN_SOUND"
  };
  expect(playChickenSound()).toEqual(expectedAction);
});
