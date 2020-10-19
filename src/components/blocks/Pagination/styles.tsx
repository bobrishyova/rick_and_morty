import styled from 'styled-components';
import { DivWithPageProps } from './types';

export const DivWithPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media (max-width: ${(props) => props.theme.media.lessThanBig}px) {
    font-size: ${(props) => props.theme.fontSizes[2]}px;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    font-size: ${(props) => props.theme.fontSizes[0]}px;
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
    background-color: ${(props) => props.theme.colors.grayish};
    color: ${(props) => props.theme.colors.dark};
  }
  @media (max-width: ${(props) => props.theme.media.moreThanMiddle}px) {
    padding: 4px 8px;
  }
`;

export const DivWithPage = styled(PageSwitch)<DivWithPageProps>`
  ${({ selected, theme }) =>
    selected &&
    `
		background-color: ${theme.colors.lighterThanBlack};
		color: ${theme.colors.white};
		pointer-events: none;
	`}
  ${({ threeDots }) =>
    threeDots &&
    `
			pointer-events: none;
	`}
`;
