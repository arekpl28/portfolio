import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/variables";

export const Logo = styled(NavLink)`
  font-size: 9vw;
  font-weight: 700;
  letter-spacing: 2px;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.6s;
  @media screen and (max-width: 850px) and (max-height: 500px) and (orientation: landscape) {
    font-size: 5vw;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    font-size: 6vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    font-size: 4vw;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    font-size: 5vw;
  }
  @media screen and ${device.laptopM} {
    font-size: 3vw;
  }
  @media screen and ${device.desktop} {
    font-size: 2vw;
  }
`;
