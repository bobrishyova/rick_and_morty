import { CHARACTERS, CHARACTER } from '../constants';
import createReducer from '../helpers/createReducer';

const characterReducer = createReducer(CHARACTERS, CHARACTER);

export default characterReducer;
