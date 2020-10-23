import { EPISODE } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ItemPayload } from 'actions/types';

export const requestEpisode = defineAction<ItemPayload>(EPISODE.FETCH);
export const successEpisode = defineAction<ItemPayload>(EPISODE.SUCCESS);
export const errorEpisode = defineAction<ItemPayload>(EPISODE.ERROR);
