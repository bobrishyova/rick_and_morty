import { ListPayload } from 'types/interfaces';

export interface LocationsProps {
  getFetchLocations: () => {};
  locations: Array<Locations> | Locations;
  locationsInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
}

interface Locations {
  [key: string]: string;
}

export interface MapDispatchProps {
  getFetchLocations: (payload: ListPayload) => {};
}

export interface MapStateProps {}
