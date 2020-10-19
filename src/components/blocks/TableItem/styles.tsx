import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DivItemProps } from './types';

export const LinkWithInformation = styled(Link)`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.white}`};
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemTable = styled.p`
  margin: 0;
  @media (max-width: ${(props) => props.theme.media.lessThanBig}px) {
    font-size: ${(props) => props.theme.fontSizes[0]}px;
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
