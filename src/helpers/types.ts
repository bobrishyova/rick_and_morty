export interface TypeAction {
  type: string;
  payload: {
    info: object;
    results: Array<object>;
  };
}

export interface DefineAction {
  FETCH: string;
  SUCCESS: string;
  ERROR: string;
}

export interface Pages {
  currentPage: number;
  totalPage: number;
}

export interface UrlProps {
  url: string;
}
