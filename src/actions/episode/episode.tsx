import { EPISODE } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestEpisode = defineAction(EPISODE.FETCH);
export const successEpisode = defineAction(EPISODE.SUCCESS);
export const errorEpisode = defineAction(EPISODE.ERROR);
