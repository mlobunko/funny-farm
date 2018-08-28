import * as t from './actionTypes';

export const set = name => ({
  type: t.SET,
  name: name.toUpperCase()
});
