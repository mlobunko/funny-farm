import { Howl } from 'howler';
import music from './sounds/music.mp3';

const musicTrack = new Howl({
  src: [music],
  loop: true,
  volume: 0.2
});

export const play = () => musicTrack.play();
export const stop = () => musicTrack.stop();
