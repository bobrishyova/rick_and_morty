import { CHARACTERS } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ListPayload } from 'actions/types';

export const requestCharacters = defineAction<ListPayload>(CHARACTERS.FETCH);
export const successCharacters = defineAction<ListPayload>(CHARACTERS.SUCCESS);
export const errorCharacters = defineAction<ListPayload>(CHARACTERS.ERROR);
