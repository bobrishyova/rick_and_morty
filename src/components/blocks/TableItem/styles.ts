import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DivItemProps } from './types';

export const LinkWithInformation = styled(Link)`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.text}`};
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const ItemTable = styled.p`
  margin: 0;
  @media (max-width: ${({ theme }) => theme.media.lessThanBig}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

export const DivItem = styled.div<DivItemProps>`
  width: 232px;
  text-align: center;
  &:first-child {
    text-align: start;
  }
  ${({ widthOfItems }) =>
    widthOfItems &&
    `
		width: 309px;
		&:first-child {
			text-align: start;
		}
	`}
`;
