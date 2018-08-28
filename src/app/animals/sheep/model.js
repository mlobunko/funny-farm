import { Howl } from 'howler';
import voice from './sounds/voice.mp3';

const sound = new Howl({
  src: [voice]
});

export const playSound = () => sound.play();
