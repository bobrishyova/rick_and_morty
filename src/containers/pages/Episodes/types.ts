export interface EpisodesProps {
  getFetchEpisodes: () => {};
  episodes: Array<object>;
  episodesInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
}
