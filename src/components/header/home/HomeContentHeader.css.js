import styled from "styled-components";
import { device } from "../../../utils/variables";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 85vh;
  top: 0%;
  left: 0%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Name = styled.h1`
  position: absolute;
  width: 100%;
  left: 0%;
  bottom: 45vh;
  font-size: 8vw;
  padding: 0 10px;
  font-weight: 600;
  @media screen and ${device.laptopM} and (orientation: portrait) {
    font-size: 6vw;
  }
  @media screen and ${device.mobileL} and (max-height: 500px) {
    font-size: 6vw;
    bottom: 40vh;
  }
  @media screen and ${device.desktop} {
    font-size: 5vw;
  }
`;
export const Profession = styled.p`
  position: absolute;
  width: 100%;
  bottom: 40vh;
  left: 0%;
  font-size: 4vw;
  font-weight: 200;
  @media screen and ${device.laptopM} {
    font-size: 3vw;
  }
  @media screen and ${device.mobileL} and (max-height: 500px) {
    font-size: 3vw;
    bottom: 30vh;
  }
  @media screen and ${device.desktop} {
    font-size: 2vw;
  }
`;
export const DivMedia = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30vh;
  @media screen and ${device.mobileL} and (max-height: 500px) {
    bottom: 20vh;
  }
`;
export const DivProfileImg = styled.div`
  position: absolute;
  width: 30vh;
  height: 30vh;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 15vh);
  border: 10px solid rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    border-width: 15px;
  }
  @media screen and ${device.laptop} and (orientation: portrait) {
    border-width: 20px;
  }
  @media screen and (orientation: landscape) {
    width: 30vh;
    height: 30vh;
    border-width: 8px;
  }
  @media screen and ${device.laptop} and (orientation: landscape) {
    border-width: 10px;
  }
  @media screen and ${device.laptopM} and (orientation: landscape) {
    border-width: 15px;
  }
  @media screen and ${device.desktop} and (orientation: landscape) {
    border-width: 20px;
  }
  @media screen and ${device.desktopM} and (orientation: landscape) {
    width: 550px;
    height: 550px;
    border-width: 25px;
  }
`;
