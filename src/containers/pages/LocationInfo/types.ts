export interface LocationInfoProps {
  getFetchLocation: (id: Id) => {};
  location: {
    name: string;
    type: string;
    residents: Array<string>;
  };
  loading: boolean;
}

interface Id {
  id: number;
}
