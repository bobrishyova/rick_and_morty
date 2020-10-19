import { LOCATION } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestLocation = defineAction(LOCATION.FETCH);
export const successLocation = defineAction(LOCATION.SUCCESS);
export const errorLocation = defineAction(LOCATION.ERROR);
