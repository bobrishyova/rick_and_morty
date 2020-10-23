import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  @media (max-width: ${({ theme }) => theme.media.middle}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;
