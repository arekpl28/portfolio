import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const Button = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.55rem 0.95rem;
  letter-spacing: 0.025em;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.55rem;
  border: none;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  transition: 0.2s;
  color: ${({ theme }) => theme.text.color_hover};
`;

export const A = styled(Link)`
  font-family: "Nunito", sans-serif;
  display: block;
  width: min-content;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.55rem 0.95rem;
  letter-spacing: 0.025em;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.55rem;
  box-shadow: 2px 2px 5px #0c0c0c, -3px -3px 7px #303030;
  transition: 0.2s;
  // &:hover {
  //   box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  // }
`;
export const NavA = styled(NavLink)`
  font-family: "Nunito", sans-serif;
  display: block;
  width: min-content;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.55rem 0.95rem;
  letter-spacing: 0.025em;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.55rem;
  box-shadow: 2px 2px 5px #0c0c0c, -3px -3px 7px #303030;
  transition: 0.2s;
  // &:hover {
  //   box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  //   border-color: transparent;
  // }
`;
