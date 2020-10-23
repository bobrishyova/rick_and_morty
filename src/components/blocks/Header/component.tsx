import React from 'react';
import menuConfig from './config';

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
        {menuConfig.map(({ url, title }) => (
          <Item>
            <MenuItem href={url}>{title}</MenuItem>
          </Item>
        ))}
      </MenuBox>
    </HamburgerMenu>
    <Nav>
      {menuConfig.map(({ url, title }) => (
        <StyledLink to={url}>
          <Item>{title}</Item>
        </StyledLink>
      ))}
    </Nav>
  </HeaderPage>
);

export default Header;
