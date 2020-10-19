export interface СharacterInfoProps {
  character: {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    created: string;
    episodes: Array<Episodes>;
  };
  loading: boolean;
  getFetchCharacter: (id: Id) => {};
}

interface Episodes {
  episode: string;
}

interface Id {
  id: number;
}
