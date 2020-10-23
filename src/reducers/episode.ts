import { EPISODES, EPISODE } from '../constants';
import createReducer from '../helpers/createReducer';

const episodeReducer = createReducer(EPISODES, EPISODE);

export default episodeReducer;
