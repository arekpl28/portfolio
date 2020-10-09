import styled from "styled-components";
import { device } from "../../../utils/variables";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  justify-content: center;
  width: 100%;
  padding: 25vh 15px 5vh;
  background-color: ${({ theme }) => theme.colors.bgc};
`;
export const H3Style = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 5rem;
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 2rem;
  }
`;
export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  gap: 2rem;
  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 45vw 45vw;
    gap: 2rem;
  }
  @media screen and ${device.surface} and (min-height: 540px) {
    grid-template-columns: 45vw 45vw;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: 45vw 45vw;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 35vw 35vw;
  }
  @media screen and ${device.laptopM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and ${device.desktop} {
    grid-template-columns: 400px 400px 400px;
  }
`;
