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
}

interface Page {
  page: number;
}
