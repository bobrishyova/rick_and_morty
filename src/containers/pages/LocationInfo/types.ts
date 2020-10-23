import { ItemPayload, IdProps } from 'types/interfaces';

export interface LocationInfoProps {
  getFetchLocation: (id: IdProps) => {};
  location: Location;
  loading: boolean;
}

interface Location {
  name: string;
  type: string;
  residents: Array<Residents> | Residents;
}

interface Residents {
  id: number;
  name: string;
}

export interface LocationItem {
  id: number;
  name: string;
}

export interface MapStateProps {}

export interface MapDispatchProps {
  getFetchLocation: (payload: ItemPayload) => {};
}
