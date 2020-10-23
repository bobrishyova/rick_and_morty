import { Character, ItemPayload, IdProps } from 'types/interfaces';

export interface СharacterInfoProps {
  character: Character;
  loading: boolean;
  getFetchCharacter: (id: IdProps) => {};
}

export interface EpisodeItem {
  id: number;
  episode: string;
}

export interface MapStateProps {
  // character: StateProps;
  // loading: TypeObject;
}

export interface MapDispatchProps {
  getFetchCharacter: (payload: ItemPayload) => {};
}
