import { CHARACTERS } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestCharacters = defineAction(CHARACTERS.FETCH);
export const successCharacters = defineAction(CHARACTERS.SUCCESS);
export const errorCharacters = defineAction(CHARACTERS.ERROR);
