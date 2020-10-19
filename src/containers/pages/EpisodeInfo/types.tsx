export interface EpisodeInfoProps {
  loading: boolean;
  episode: {
    characters: Array<string>;
    name: string;
    air_date: string;
    episode: string;
  };
  getFetchEpisode: (id: Id) => {};
}

interface Id {
  id: number;
}
