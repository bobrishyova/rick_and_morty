import { LOCATIONS } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ListPayload } from 'actions/types';

export const requestLocations = defineAction<ListPayload>(LOCATIONS.FETCH);
export const successLocations = defineAction<ListPayload>(LOCATIONS.SUCCESS);
export const errorLocations = defineAction<ListPayload>(LOCATIONS.ERROR);
