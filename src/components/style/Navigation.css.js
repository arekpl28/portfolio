import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 10000;
  &.sticky {
    padding: 5px 100px;
    background-color: #fff;
  }
  &.sticky ul li a {
    color: #000;
  }
  &.sticky ul li a.active {
    color: red;
  }
`;

export const LogoNavLink = styled(NavLink)`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.6s;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavItemLink = styled(NavLink)`
  margin: 0 15px;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: 0.6s;
  &:hover {
    color: #2dfa67;
  }
  &.active {
    color: #2dfa67;
  }
`;
