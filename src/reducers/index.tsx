import { combineReducers } from 'redux';
import characterReducer from './character';
import episodeReducer from './episode';
import locationReducer from './location';

const roootReducer = combineReducers({
  character: characterReducer,
  episode: episodeReducer,
  location: locationReducer,
});

export default roootReducer;
