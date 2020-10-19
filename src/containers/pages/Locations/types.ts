export interface LocationsProps {
  getFetchLocations: () => {};
  locations: Array<object>;
  locationsInfo: {
    count: number;
    pages: number;
    next: string;
  };
  loading: boolean;
}
