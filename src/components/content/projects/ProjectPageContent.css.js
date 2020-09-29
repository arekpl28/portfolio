import styled from "styled-components";
import { device } from "../../../utils/variables";
import { NavA } from "../../Button.css";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 20px 2vw;
  background: ${({ theme }) => theme.colors.bgc};
  overflow: hidden;
  @media screen and ${device.laptop} {
    padding: 20px 50px;
  }
`;
export const DivConetnt = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  @media screen and ${device.tablet} {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  }
`;
export const DivMenu = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  align-content: start;
  @media screen and ${device.tablet} {
    grid-template-rows: min-content min-content;
    padding: 16px 20px 0px 0px;
  }
`;
export const DivRest = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  @media screen and ${device.tablet} {
    grid-template-columns: 80%;
    grid-template-rows: min-content min-content;
    padding: 16px 20px 0px 0px;
    gap: 0vw;
  }
`;
export const LinkProjects = styled(NavA)`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  justify-self: center;
  margin-top: 10px;
  font-size: 0.8rem;
`;
export const LinkMenu = styled(LinkProjects)``;
export const DivProject = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding-top: 16px;
  @media screen and ${device.laptop} {
    justify-content: center;
  }
`;
