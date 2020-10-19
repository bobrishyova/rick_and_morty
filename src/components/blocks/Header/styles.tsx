import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGray};
  min-height: 60px;
  max-height: 60px;
  height: 60px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  width: 600px;
  height: 60px;
  list-style-type: none;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: flex;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  padding-left: 10px;
  font-family: Bradley Hand, cursive;
  @media (max-width: ${(props) => props.theme.media.small}px) {
    font-size: ${(props) => props.theme.fontSizes[3]}px;
    padding-left: 0;
  }
`;

export const MenuButton = styled.label`
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
`;

export const MenuBox = styled.ul`
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 220px;
    margin: 0;
    padding: 50px 0;
    list-style: none;
    background-color: ${(props) => props.theme.colors.lightGray};
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
    transition-duration: 0.25s;
  }
  @media (max-width: ${(props) => props.theme.media.middle}px) {
    width: 175px;
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    width: 155px;
  }
`;

export const MenuItem = styled.a`
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: block;
    padding: 10px 22px;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes[4]}px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
    &:hover {
      background-color: ${(props) => props.theme.colors.dullGray};
    }
  }
  @media (max-width: ${(props) => props.theme.media.smallest}px) {
    font-size: ${(props) => props.theme.fontSizes[2]}px;
  }
`;

export const Line = styled.span`
  @media (max-width: ${(props) => props.theme.media.big}px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};
    transition-duration: 0.25s;
    &::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.white};
      transition-duration: 0.25s;
      content: '';
      top: 8px;
    }
    &::before {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.white};
      transition-duration: 0.25s;
      content: '';
      top: -8px;
    }
  }
`;

export const MenuToggle = styled.input`
  @media (max-width: ${(props) => props.theme.media.big}px) {
    opacity: 0;
    display: none;
    &:checked ~ ${MenuBox} {
      visibility: visible;
      right: 0;
    }
    &:checked ~ ${MenuButton} {
      position: fixed;
    }
    &:checked ~ ${MenuButton} {
      ${Line} {
        transform: rotate(45deg);
        &::before {
          top: 0;
          transform: rotate(0);
          background-color: ${(props) => props.theme.colors.black};
        }
        &::after {
          top: 0;
          transform: rotate(90deg);
          background-color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
`;

export const Item = styled.li``;
