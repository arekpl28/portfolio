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
  @media screen and ${device.tablet} {
    animation: none;
    border-bottom: none;
    display: block;
    align-content: unset;
  }
  @media screen and ${device.laptopM} {
    padding: 0 15px;
  }
  @media screen and ${device.laptopM} {
    padding: 0 35px;
  }
  @media screen and ${device.desktop} {
    padding: 0 10px;
  }
`;
export const NavItemLink = styled(NavLink)`
  dispaly: block;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: 0.6s;
  &.active {
    color: ${({ theme }) => theme.colors.green};
  }
  @media screen and ${device.tablet} {
    margin: 0 15px;
    font-size: 1.8rem;
    color: white;
    transition: 0.3s;
    &:hover {
      color: red;
    }
    &.active {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  @media screen and ${device.desktop} {
    font-size: 2rem;
  }
  @media screen and ${device.desktopM} {
    font-size: 3rem;
  }
`;
