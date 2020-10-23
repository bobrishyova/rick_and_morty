import { CHARACTER } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ItemPayload } from 'actions/types';

export const requestCharacter = defineAction<ItemPayload>(CHARACTER.FETCH);
export const successCharacter = defineAction<ItemPayload>(CHARACTER.SUCCESS);
export const errorCharacter = defineAction<ItemPayload>(CHARACTER.ERROR);
