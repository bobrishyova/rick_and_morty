import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Theme } from 'types/interfaces';

export const HeaderPage = styled.div<Theme>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.commonTheme};
  min-height: 60px;
  max-height: 60px;
  height: 60px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  width: 600px;
  height: 60px;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.media.big}) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.big}) {
    display: flex;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  padding-left: 10px;
  font-family: Bradley Hand, cursive;
  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    padding-left: 0;
  }
`;

export const MenuButton = styled.label`
  @media (max-width: ${({ theme }) => theme.media.big}) {
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
  @media (max-width: ${({ theme }) => theme.media.big}) {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 220px;
    margin: 0;
    padding: 50px 0;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.backgroundBurgerMenu};
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
    transition-duration: 0.25s;
  }
  @media (max-width: ${({ theme }) => theme.media.middle}) {
    width: 175px;
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    width: 155px;
  }
`;

export const MenuItem = styled.a`
  @media (max-width: ${({ theme }) => theme.media.big}) {
    display: block;
    padding: 10px 22px;
    color: ${({ theme }) => theme.colors.textMenu};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.burgerMenuHover};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.smallest}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;

export const Line = styled.span`
  @media (max-width: ${({ theme }) => theme.media.big}) {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    transition-duration: 0.25s;
    &::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text};
      transition-duration: 0.25s;
      content: '';
      top: 8px;
    }
    &::before {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text};
      transition-duration: 0.25s;
      content: '';
      top: -8px;
    }
  }
`;

export const MenuToggle = styled.input`
  @media (max-width: ${({ theme }) => theme.media.big}) {
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
          background-color: ${({ theme }) => theme.colors.textMenu};
        }
        &::after {
          top: 0;
          transform: rotate(90deg);
          background-color: ${({ theme }) => theme.colors.textMenu};
        }
      }
    }
  }
`;

export const Item = styled.li``;
