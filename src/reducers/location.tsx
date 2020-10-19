import { LOCATIONS, LOCATION } from '../constants';
import createReducer from '../helpers/createReducer';

const locationReducer = createReducer(LOCATIONS, LOCATION);

export default locationReducer;
