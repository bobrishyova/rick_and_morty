import { ListPayload } from 'types/interfaces';

export interface CharactersProps {
  characters: Array<Characters> | Characters;
  charactersInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
  getFetchCharacters: () => {};
}

interface Characters {
  [key: string]: string;
}

export interface MapDispatchProps {
  getFetchCharacters: (payload: ListPayload) => {};
}

export interface MapStateProps {
  loading: boolean;
  charactersInfo: any;
  characters: any;
}
