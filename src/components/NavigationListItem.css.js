import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../utils/variables";

const navLinkFade = keyframes`
  from {
    opacity:0;
    transform: translateX(150px);
  }
  to {
    opacity:1;
    transform: translateX(0px);
  }
`;
export const NavItem = styled.li`
  display: grid;
  width: 100%;
  align-content: center;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  list-style: none;
  &.navLinkFade:nth-child(1) a {
    animation: ${navLinkFade} 0.5s ease;
  }
  &.navLinkFade:nth-child(2) a {
    animation: ${navLinkFade} 0.75s ease;
  }
  &.navLinkFade:nth-child(3) a {
    animation: ${navLinkFade} 1s ease;
  }
  &.navLinkFade:nth-child(4) a {
    animation: ${navLinkFade} 1.25s ease;
  }
  @media screen and (min-width: 710px) {
    animation: none;
    border-bottom: none;
    display: block;
    align-content: unset;
  }
`;
export const NavItemLink = styled(NavLink)`
  dispaly: block;
  width: 100%;
  text-decoration: none;
  // text-transform: uppercase;
  color: ${({ theme }) => theme.text.color};
  transition: 0.6s;
  &.active {
    color: orange;
  }
  @media screen and (min-width: 710px) {
    margin: 0 15px;
    color: white;
    transition: 0.3s;
    &:hover {
      color: orange;
    }
    &.active {
      color: orange;
    }
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    font-size: 1.1rem;
  }
  @media screen and ${device.laptop} {
    font-size: 1.1rem;
  }
  @media screen and ${device.desktop} {
    // font-size: 2rem;
  }
  @media screen and ${device.desktopM} {
    // font-size: 3rem;
  }
`;
