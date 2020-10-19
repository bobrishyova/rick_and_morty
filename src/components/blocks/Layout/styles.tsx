import styled from 'styled-components';

export const TableHeader = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin-top: 30px;
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  padding: 20px 40px;
  @media (max-width: ${(props) => props.theme.media.middle}px) {
    padding: 10px 20px;
  }
`;

export const Information = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: ${(props) => `4px double ${props.theme.colors.white}`};
  @media (max-width: ${(props) => props.theme.media.lessThanBig}px) {
    font-size: ${(props) => props.theme.fontSizes[0]}px;
  }
`;

interface TableItemsWithDivProps {
  firstItem: boolean;
}

export const TableItemsWithDiv = styled.p<TableItemsWithDivProps>`
  width: 309px;
  margin: 0;
  text-align: center;
  &:first-child {
    text-align: start;
  }
  ${({ firstItem }) =>
    firstItem &&
    `
		width: 232px;
	`}
`;
