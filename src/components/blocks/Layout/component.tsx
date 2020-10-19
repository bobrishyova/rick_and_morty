import React, { useEffect } from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import Pagination from 'components/blocks/Pagination/index';
import Loading from 'components/blocks/Loading/index';
import TableItem from '../TableItem';
import PageTitle from '../PageTitle';
import { LayoutProps } from './types';

import { TableHeader, Information, TableItemsWithDiv } from './styles';

const Layout = ({
  tableRequest,
  titleName,
  arrayOfHeaders,
  tableData,
  tableInfo,
  tableUrlTitle,
  tableItemConfig,
  loading,
}: LayoutProps) => {
  const { search } = useLocation();

  useEffect(() => {
    const page = Number.parseInt(qs.parse(search).page as string, 10);
    tableRequest({ page: page || 1 });
  }, [tableRequest, search]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableHeader>
          <PageTitle titleName={titleName} />
          <Information>
            {arrayOfHeaders.map((header) => (
              <TableItemsWithDiv key={header} firstItem={arrayOfHeaders.length === 4}>
                {header}
              </TableItemsWithDiv>
            ))}
          </Information>
          {tableData.map((item) => (
            <TableItem
              key={item.id}
              item={item}
              config={tableItemConfig}
              urlTitle={tableUrlTitle}
            />
          ))}
          <Pagination totalPage={tableInfo.pages} />
        </TableHeader>
      )}
    </>
  );
};

export default Layout;
