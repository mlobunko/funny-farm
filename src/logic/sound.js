import { Howl } from "howler";
import cat from "../sound/cat.mp3";
import cow from "../sound/cow.mp3";
import dog from "../sound/dog.mp3";
import duck from "../sound/duck.mp3";
import music from "../sound/music.mp3";
import rooster from "../sound/rooster.mp3";
import sheep from "../sound/sheep.mp3";

const catSound = new Howl({
  src: [cat]
});

export const catSoundPlay = () => catSound.play();

const cowSound = new Howl({
  src: [cow]
});

export const cowSoundPlay = () => cowSound.play();

const dogSound = new Howl({
  src: [dog]
});

export const dogSoundPlay = () => dogSound.play();

const duckSound = new Howl({
  src: [duck]
});

export const duckSoundPlay = () => duckSound.play();

const musicTrack = new Howl({
  src: [music],
  loop: true,
  volume: 0.3
});

export const musicPlay = () => musicTrack.play();
export const musicStop = () => musicTrack.stop();

const roosterSound = new Howl({
  src: [rooster]
});

export const chickenSoundPlay = () => roosterSound.play();

const sheepSound = new Howl({
  src: [sheep]
});

export const sheepSoundPlay = () => sheepSound.play();
