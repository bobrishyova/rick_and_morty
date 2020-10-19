import { EPISODES } from 'constants/index';
import defineAction from 'helpers/defineAction';

export const requestEpisodes = defineAction(EPISODES.FETCH);
export const successEpisodes = defineAction(EPISODES.SUCCESS);
export const errorEpisodes = defineAction(EPISODES.ERROR);
