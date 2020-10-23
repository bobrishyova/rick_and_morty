import { ListPayload } from 'types/interfaces';

export interface EpisodesProps {
  getFetchEpisodes: () => {};
  episodes: Array<Episodes> | Episodes;
  episodesInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
}

interface Episodes {
  [key: string]: string;
}

export interface MapDispatchProps {
  getFetchEpisodes: (payload: ListPayload) => {};
}

export interface MapStateProps {}
