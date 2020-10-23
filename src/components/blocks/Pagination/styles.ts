import styled from 'styled-components';
import { DivWithPageProps } from './types';

export const DivWithPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media (max-width: ${({ theme }) => theme.media.lessThanBig}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

export const PageSwitch = styled.div`
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  max-width: 40px;
  max-height: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pageHover};
    color: ${({ theme }) => theme.colors.paginationText};
  }
  @media (max-width: ${({ theme }) => theme.media.moreThanMiddle}) {
    padding: 4px 8px;
  }
`;

export const DivWithPage = styled(PageSwitch)<DivWithPageProps>`
  ${({ selected, theme }) =>
    selected &&
    `
		background-color: ${theme.colors.currentPage};
		color: ${theme.colors.text};
		pointer-events: none;
	`}
  ${({ threeDots }) =>
    threeDots &&
    `
			pointer-events: none;
	`}
`;
