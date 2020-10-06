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
  bottom: 40vh;
  font-size: 7.5vw;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    bottom: 40vh;
    font-size: 6vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    bottom: 45vh;
    font-size: 6vw;
  }
  @media screen and ${device.laptopM} {
    bottom: 45vh;
    font-size: 5vw;
  }
`;
export const Profession = styled.h2`
  position: absolute;
  width: 100%;
  bottom: 35vh;
  left: 0%;
  font-size: 4vw;
  font-weight: 200;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    bottom: 35vh;
    font-size: 3vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    bottom: 38vh;
    font-size: 3vw;
  }
  @media screen and ${device.laptopM} {
    bottom: 38vh;
    font-size: 2.2vw;
  }
`;
export const DivMedia = styled.div`
  position: absolute;
  width: 100%;
  bottom: 25vh;
  @media screen and (max-height: 500px) and (orientation: landscape) {
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
  border: 10px solid rgba(250, 250, 250, 0.1);
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
`;
