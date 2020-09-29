import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/variables";

export const Logo = styled(NavLink)`
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.6s;
`;
