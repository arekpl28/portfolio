import styled, { keyframes } from "styled-components";
import { device } from "../../utils/variables";

const Image = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/home.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: -9;
`;

export const HomeImage = styled(Image)`
  background-image: url("images/home.jpg");
  bottom: 15vh;
`;
export const AboutImage = styled(Image)`
  background-image: url("images/about.jpeg");
  background-attachment: initial;
  background-size: cover;
  background-position: left top;
  position: absolute;
`;

export const ProjectImage = styled(Image)`
  background-image: url("images/project.jpg");
  position: absolute;
  background-attachment: initial;
  background-size: cover;
  background-position: top left;
  @media screen and ${device.tablet} {
    background-position: left 30%;
  }
`;
export const ContactImage = styled(Image)`
  background-image: url("images/map.jpg");
`;

const Cloud1 = keyframes`
0% {
    transform: translateX(-60%);
  }
  80%{
    transform: translateX(100%);
  }
  80.0006%{
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-60%);
  }
`;
const Cloud2 = keyframes`
0% {
    transform: translateX(-70%);
  }
  85%{
    transform: translateX(100%);
  }
  85.0006%{
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-70%);
  }
`;
const Cloud3 = keyframes`
0% {
    transform: translateX(-80%);
  }
  90%{
    transform: translateX(100%);
  }
  90.0006%{
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-80%);
  }
`;
const Cloud4 = keyframes`
0% {
    transform: translateX(-90%);
  }
  95%{
    transform: translateX(100%);
  }
  95.0006%{
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-90%);
  }
`;
const Cloud5 = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const Cloud6 = keyframes`
0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(100%);
  }
  50.0006% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Clouds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  img {
    position: absolute;
    left: 0%;
    bottom: 0%;
    max-width: 100%;
    // transform: translateX(-100%);
    // animation:  8s linear infinite;
    &:nth-child(1) {
      animation: ${Cloud1} 16s linear infinite;
    }
    &:nth-child(2) {
      animation: ${Cloud2} 24s linear infinite;
    }
    &:nth-child(3) {
      display: none;
      animation: ${Cloud3} 32s linear infinite;
    }
    &:nth-child(4) {
      animation: ${Cloud4} 40s linear infinite;
    }
    &:nth-child(5) {
      animation: ${Cloud5} 48s linear infinite;
    }
    &:nth-child(6) {
      animation: ${Cloud6} 48s linear infinite;
    }
  }
`;
