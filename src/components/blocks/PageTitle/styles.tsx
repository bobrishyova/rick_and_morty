import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  @media (max-width: ${(props) => props.theme.media.middle}px) {
    font-size: ${(props) => props.theme.fontSizes[2]}px;
  }
`;
