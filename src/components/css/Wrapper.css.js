import styled from "styled-components";
import { device } from "../../utils/variables";

export const BigWrapperHeader = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const SmallWrapperHeader = styled.header`
  position: relative;
  width: 100%;
  height: 60vh;
  @media screen and (orientation: portrait) {
    height: 45vh;
  }
  @media screen and ${device.laptop} {
    height: 45vh;
  }
`;
