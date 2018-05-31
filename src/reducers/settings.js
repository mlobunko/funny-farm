export const settingsReducerDefaultState = {
  isLandscape: false,
  isMusicOn: true,
  isCowSoundPlaying: false,
  isCatSoundPlaying: false,
  isDogSoundPlaying: false,
  isDuckSoundPlaying: false,
  isSheepSoundPlaying: false,
  isChickenSoundPlaying: false,
  clickedAnimal: null
};

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    case "LANDSCAPE_ON":
      return {
        ...state,
        isLandscape: true
      };
    case "LANDSCAPE_OFF":
      return {
        ...state,
        isLandscape: false
      };
    case "CHANGE_IS_MUSIC_ON":
      return {
        ...state,
        isMusicOn: !state.isMusicOn
      };
    case "COW_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isCowSoundPlaying: true
      };
    case "COW_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isCowSoundPlaying: false
      };
    case "CAT_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isCatSoundPlaying: true
      };
    case "CAT_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isCatSoundPlaying: false
      };
    case "DOG_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isDogSoundPlaying: true
      };
    case "DOG_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isDogSoundPlaying: false
      };
    case "DUCK_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isDuckSoundPlaying: true
      };
    case "DUCK_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isDuckSoundPlaying: false
      };
    case "SHEEP_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isSheepSoundPlaying: true
      };
    case "SHEEP_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isSheepSoundPlaying: false
      };
    case "CHICKEN_SOUND_PLAYING_TRUE":
      return {
        ...state,
        isChickenSoundPlaying: true
      };
    case "CHICKEN_SOUND_PLAYING_FALSE":
      return {
        ...state,
        isChickenSoundPlaying: false
      };
    case "CLICKED_ANIMAL_CAT":
      return {
        ...state,
        clickedAnimal: "CAT"
      };
    case "CLICKED_ANIMAL_COW":
      return {
        ...state,
        clickedAnimal: "COW"
      };
    case "CLICKED_ANIMAL_CHICKEN":
      return {
        ...state,
        clickedAnimal: "ROOSTER"
      };
    case "CLICKED_ANIMAL_DOG":
      return {
        ...state,
        clickedAnimal: "DOG"
      };
    case "CLICKED_ANIMAL_DUCK":
      return {
        ...state,
        clickedAnimal: "DUCK"
      };
    case "CLICKED_ANIMAL_SHEEP":
      return {
        ...state,
        clickedAnimal: "SHEEP"
      };
    case "CLICKED_ANIMAL_NULL":
      return {
        ...state,
        clickedAnimal: null
      };
    default:
      return state;
  }
};
