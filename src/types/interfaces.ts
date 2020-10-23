export interface Theme {
  theme: ThemePropsI;
}

export interface ThemePropsI {
  colors: Colors;
  fontSizes: Array<string>;
  media: Media;
}

interface Colors {
  [key: string]: string;
}

interface Media {
  [key: string]: string;
}

interface Episode {
  id: number;
  episode: string;
}

export interface Character {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: string;
  episodes: Array<Episode> | Episode;
}

export interface ItemPayload {
  id: string;
}

export interface ListPayload {
  page: number;
}

interface Item {
  [key: string]: string;
}

export interface TypeObject {
  list: Array<List> | List;
  info: Info;
  item: Item;
  loading: boolean;
}

interface List {
  episode: Array<string>;
  name: string;
  id: number;
  image: string;
}

// interface CharacterItem {
//   created: string;
//   episode: Array<string>;
//   gender: string;
//   episodes: Array<Episode> | Episode;
//   id: number;
//   name: number;
//   image: string;
//   species: string;
//   status: string;
//   url: string;
// }

// interface Episode {
//   name: string;
//   id: number;
// }

interface Info {
  count: number;
  pages: number;
  next: string;
}

export interface StateProps {
  character: TypeObject;
  episode: TypeObject;
  location: TypeObject;
}

export interface IdProps {
  id: string;
}
