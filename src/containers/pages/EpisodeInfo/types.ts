import { IdProps, ItemPayload } from 'types/interfaces';

export interface EpisodeInfoProps {
  loading: boolean;
  episode: Episode;
  getFetchEpisode: (id: IdProps) => {};
}

export interface MapStateProps {}

export interface ResidentItem {
  name: string;
  id: number;
}

interface Episode {
  characters: Array<Characters> | Characters;
  name: string;
  air_date: string;
  episode: string;
  url: string;
}

interface Characters {
  name: string;
  id: number;
}

export interface MapDispatchProps {
  getFetchEpisode: (payload: ItemPayload) => {};
}
