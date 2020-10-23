export interface LayoutProps {
  titleName: string;
  arrayOfHeaders: Array<string>;
  tableData: Array<TableData>;
  tableInfo: {
    pages: number;
  };
  loading: boolean;
  tableItemConfig: Array<string>;
  tableUrlTitle: string;
  tableRequest: (page: Page) => {};
}

interface TableData {
  id: number;
  air_date: string;
  created: string;
  episode: string;
  name: string;
  url: string;
  characters: Array<string>;
}

interface Page {
  page: number;
}
