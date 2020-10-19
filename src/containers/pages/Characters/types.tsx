export interface CharactersProps {
  characters: Array<object>;
  charactersInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
  getFetchCharacters: () => {};
}
