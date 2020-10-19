import { LOCATIONS } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestLocations = defineAction(LOCATIONS.FETCH);
export const successLocations = defineAction(LOCATIONS.SUCCESS);
export const errorLocations = defineAction(LOCATIONS.ERROR);
