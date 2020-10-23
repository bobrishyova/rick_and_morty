import styled from 'styled-components';
import { DivWithInfoProps, HeaderInfoProps } from './types';

export const HeaderInfo = styled.div<HeaderInfoProps>`
  width: 60%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.commonTheme};
  color: ${({ theme }) => theme.colors.text};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 10px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding: 40px;
  display: flex;
  flex-direction: column-reverse;
  @media (max-width: ${({ theme }) => theme.media.biggest}) {
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.media.moreThanMiddle}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    padding: 15px;
  }
  ${({ presenceOfImage }) =>
    presenceOfImage &&
    `
    justify-content: flex-start;
    flex-direction: row;
  `}
`;

export const DivWithInfo = styled.div<DivWithInfoProps>`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${({ divWithImage, theme }) =>
    divWithImage &&
    `
      justify-content: space-between;
      height: 300px;
      margin-left: 20px;
      @media (max-width: ${theme.media.biggest}) {
        height: 200px;
      }
      @media (max-width: ${theme.media.lessThanBig}) {
        margin-left: 10px;
      }
      @media (max-width: ${theme.media.middle}) {
        height: 150px;
      }
      @media (max-width: ${theme.media.smallest}) {
        height: 100px;
      }
  `}
`;

export const ImgCharacter = styled.img`
  border-radius: 10px;
  filter: drop-shadow(0 0 5px #ffffff);
  @media (max-width: ${({ theme }) => theme.media.biggest}) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: ${({ theme }) => theme.media.middle}) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    width: 100px;
    height: 100px;
  }
`;

export const ImageAndListOfInfo = styled.div``;

export const DetailedInfo = styled.p`
  margin: 0;
  @media (max-width: ${({ theme }) => theme.media.lessThanBig}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

export const ListNameAndListOfInfo = styled(DetailedInfo)`
  margin: 5px 0;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.media.lessThanBig}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;
