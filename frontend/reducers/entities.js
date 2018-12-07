import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import pokemon from './pokemon_reducer';

export default combineReducers({
  pokemon
});