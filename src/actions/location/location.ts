import { LOCATION } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ItemPayload } from 'actions/types';

export const requestLocation = defineAction<ItemPayload>(LOCATION.FETCH);
export const successLocation = defineAction<ItemPayload>(LOCATION.SUCCESS);
export const errorLocation = defineAction<ItemPayload>(LOCATION.ERROR);
