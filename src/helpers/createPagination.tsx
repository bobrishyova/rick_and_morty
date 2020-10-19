import { PAGES_FOR_SMALL, DOTS_BORDER } from 'constants/index';
import { Pages } from './types';

const getDotsArray = (position: string, condition: boolean) =>
  condition
    ? [
      {
        key: `${position}Dots`,
        value: '...',
      },
    ]
    : [];

const getPages = (from: number, to: number, totalPage: number) =>
  new Array(to - from + 1).fill(0).reduce((accumulator, _, index) => {
    const page = from + index;

    if (page > 1 && page < totalPage) {
      return [
        ...accumulator,
        {
          key: `${page}`,
          value: page,
        },
      ];
    }
    return accumulator;
  }, []);

const createPagination = ({ currentPage, totalPage }: Pages) => {
  const isSmall = totalPage <= PAGES_FOR_SMALL;
  const hasLeftDots = !isSmall && currentPage > DOTS_BORDER;
  const hasRightDots = !isSmall && currentPage < totalPage - 2;

  const pages = isSmall
    ? getPages(2, 3, totalPage === 4 ? PAGES_FOR_SMALL : totalPage)
    : getPages(currentPage - 1, currentPage + 1, totalPage);

  return [
    {
      key: '1',
      value: 1,
    },
    ...getDotsArray('left', hasLeftDots),
    ...pages,
    ...getDotsArray('right', hasRightDots),
    {
      key: `${totalPage}`,
      value: totalPage,
    },
  ];
};

export default createPagination;
