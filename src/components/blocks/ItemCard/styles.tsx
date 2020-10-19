import styled from 'styled-components';
import { DivWithInfoProps, HeaderInfoProps } from './types';

export const HeaderInfo = styled.div<HeaderInfoProps>`
  width: 60%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin-top: 30px;
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  padding: 40px;
  display: flex;
  flex-direction: column-reverse;
  @media (max-width: ${(props) => props.theme.media.biggest}px) {
    padding: 20px;
  }
  @media (max-width: ${(props) => props.theme.media.moreThanMiddle}px) {
    width: 80%;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
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
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${({ divWithImage, theme }) =>
    divWithImage &&
    `
      justify-content: space-between;
      height: 300px;
      margin-left: 20px;
      @media (max-width: ${theme.media.biggest}px) {
        height: 200px;
      }
      @media (max-width: ${theme.media.lessThanBig}px) {
        margin-left: 10px;
      }
      @media (max-width: ${theme.media.middle}px) {
        height: 150px;
      }
      @media (max-width: ${theme.media.smallest}px) {
        height: 100px;
      }
  `}
`;

export const ImgCharacter = styled.img`
  border-radius: 10px;
  filter: drop-shadow(0 0 5px #ffffff);
  @media (max-width: ${(props) => props.theme.media.biggest}px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: ${(props) => props.theme.media.middle}px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    width: 100px;
    height: 100px;
  }
`;

export const ImageAndListOfInfo = styled.div``;

export const DetailedInfo = styled.p`
  margin: 0;
  @media (max-width: ${(props) => props.theme.media.lessThanBig}px) {
    font-size: ${(props) => props.theme.fontSizes[1]}px;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    font-size: ${(props) => props.theme.fontSizes[0]}px;
  }
`;

export const ListNameAndListOfInfo = styled(DetailedInfo)`
	margin: 5px 0;
}
`;

export const Name = styled.p`
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  margin: 0;
  @media (max-width: ${(props) => props.theme.media.lessThanBig}px) {
    font-size: ${(props) => props.theme.fontSizes[3]}px;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    font-size: ${(props) => props.theme.fontSizes[2]}px;
  }
`;
