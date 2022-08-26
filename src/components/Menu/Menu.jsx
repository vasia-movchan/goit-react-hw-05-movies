import { StyledNavLink, MenuList } from './Menu.styled';

const Menu = () => {
  return (
    <MenuList>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </li>
    </MenuList>
  );
};

export default Menu;
