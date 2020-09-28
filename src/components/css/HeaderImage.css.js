import styled from "styled-components";
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
  z-index: -9;
`;

export const HomeImage = styled(Image)`
  background-image: url("images/home.jpg");
  bottom: 15vh;
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
