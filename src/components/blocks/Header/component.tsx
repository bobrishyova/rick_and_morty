import React from 'react';
import Menu from './config';
import {
  HeaderPage,
  Nav,
  HamburgerMenu,
  MenuButton,
  MenuBox,
  Title,
  MenuItem,
  MenuToggle,
  Line,
  Item,
  StyledLink,
} from './styles';

const Header = () => (
  <HeaderPage>
    <Title>Rick and Morty</Title>
    <HamburgerMenu>
      <MenuToggle id="menuToggle" type="checkbox" />
      <MenuButton htmlFor="menuToggle">
        <Line />
      </MenuButton>
      <MenuBox>
        {Menu.map(({ url, title }) => (
          <Item>
            <MenuItem href={url}>{title}</MenuItem>
          </Item>
        ))}
      </MenuBox>
    </HamburgerMenu>
    <Nav>
      {Menu.map(({ url, title }) => (
        <StyledLink to={url}>
          <Item>{title}</Item>
        </StyledLink>
      ))}
    </Nav>
  </HeaderPage>
);

export default Header;
