import React, { useState, useCallback, useEffect } from 'react';
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import createPagination from 'helpers/createPagination';
import { TotalPageProps } from './types';
import { THREE_DOTS } from 'constants/index';

import { DivWithPagination, PageSwitch, DivWithPage } from './styles';

const Pagination = ({ totalPage }: TotalPageProps) => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = Number.parseInt(qs.parse(search).page as string, 10);
    setCurrentPage(page || 1);
  }, [search, setCurrentPage]);

  const handleSetCurrentPage = useCallback(
    (page) => () => {
      push({
        pathname,
        search: qs.stringify({
          page,
        }),
      });
    },
    [pathname],
  );

  return (
    <DivWithPagination>
      {currentPage !== 1 && (
        <PageSwitch
          role="button"
          tabIndex={0}
          onClick={handleSetCurrentPage(currentPage - 1)}
          onKeyDown={handleSetCurrentPage(currentPage - 1)}
        >
          &#171;
        </PageSwitch>
      )}
      {createPagination({
        currentPage,
        totalPage,
      }).map((pagination) => (
        <DivWithPage
          role="button"
          tabIndex={0}
          key={pagination.key}
          onClick={handleSetCurrentPage(pagination.value)}
          onKeyDown={handleSetCurrentPage(pagination.value)}
          selected={currentPage === pagination.value}
          threeDots={pagination.value === THREE_DOTS}
        >
          {pagination.value}
        </DivWithPage>
      ))}
      {currentPage !== totalPage && (
        <PageSwitch
          role="button"
          tabIndex={0}
          onClick={handleSetCurrentPage(currentPage + 1)}
          onKeyDown={handleSetCurrentPage(currentPage + 1)}
        >
          &#187;
        </PageSwitch>
      )}
    </DivWithPagination>
  );
};

export default Pagination;
