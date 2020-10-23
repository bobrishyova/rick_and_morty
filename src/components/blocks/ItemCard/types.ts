export interface DivWithInfoProps {
  divWithImage: string;
}

export interface HeaderInfoProps {
  presenceOfImage: string;
}

export interface ItemCardProps {
  loading: boolean;
  subData: Array<SubData> | SubData;
  config: Array<ConfigProps>;
  item: ConfigProps;
  headerName: string;
}

export interface ConfigProps {
  [key: string]: string;
}

interface SubData {
  key: string;
}
