import styled from 'styled-components';

export const TableHeader = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.commonTheme};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: 20px 40px;
  @media (max-width: ${({ theme }) => theme.media.middle}) {
    padding: 10px 20px;
  }
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
`;

export const Information = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: ${({ theme }) => `4px double ${theme.colors.text}`};
  @media (max-width: ${({ theme }) => theme.media.lessThanBig}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
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
