import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(NavLink)`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.6s;
`;
