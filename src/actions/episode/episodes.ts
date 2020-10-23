import { EPISODES } from 'constants/index';
import defineAction from 'helpers/defineAction';
import { ListPayload } from 'actions/types';

export const requestEpisodes = defineAction<ListPayload>(EPISODES.FETCH);
export const successEpisodes = defineAction<ListPayload>(EPISODES.SUCCESS);
export const errorEpisodes = defineAction<ListPayload>(EPISODES.ERROR);
