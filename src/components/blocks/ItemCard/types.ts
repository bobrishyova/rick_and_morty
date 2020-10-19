export interface DivWithInfoProps {
  divWithImage: string;
}

export interface HeaderInfoProps {
  presenceOfImage: string;
}

export interface ItemCardProps {
  loading: boolean;
  renderSubData: Array<object>;
  config: Array<ConfigProps>;
  item: {
    image: string;
    name: string;
  };
  headerName: string;
}

interface ConfigProps {
  title: string;
  key: string;
}
