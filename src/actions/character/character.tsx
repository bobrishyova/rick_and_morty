import { CHARACTER } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestCharacter = defineAction(CHARACTER.FETCH);
export const successCharacter = defineAction(CHARACTER.SUCCESS);
export const errorCharacter = defineAction(CHARACTER.ERROR);
