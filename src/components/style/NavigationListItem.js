import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  transition: 0.3s;
  &:hover {
    color: red;
  }
  &.active {
    color: ${({ theme }) => theme.colors.green};
  }
`;
