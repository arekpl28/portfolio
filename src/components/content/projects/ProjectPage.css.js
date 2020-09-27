import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../../utils/variables";
import { NavA } from "../../Button.css";
//  @media screen and (min-width: 700px) and (orientation: landscape) {
//     width: min-content;
//     margin: 0 auto;
//   }

//  @media screen and ${device.tablet} and (orientation: portrait) {
//     font-size: 4vw;
//   }
export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  padding: 20px 2vw;
  background: ${({ theme }) => theme.colors.bgc};
  h1 {
    text-align: center;
  }
  @media screen and ${device.laptop} {
    padding: 20px 50px;
  }
`;
export const DivConetnt = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  @media screen and ${device.tablet} {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 300px 1fr;
  }
`;
export const DivMenu = styled.div`
  position: relative;
  display: grid;
  // width: 200px;
  grid-template-rows: 1fr;
  align-content: start;
  @media screen and ${device.tablet} {
    grid-template-rows: min-content min-content;
    padding: 16px 20px 0px 0px;
  }
`;
export const DivRest = styled.ul`
  // position: absolute;
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
  // color: black;
  // font-family: "Nunito", sans-serif;
  // display: block;
  // width: 100%;
  // font-size: 1rem;
  // font-weight: 400;
  // padding: 0.55rem 0.95rem;
  // letter-spacing: 0.025em;
  // text-decoration: none;
  // text-align: center;
  // margin: 10px 0;
  // background-color: transparent;
  // border-radius: 0.55rem;
  // border: 0.06rem solid rgba(30, 30, 30, 0.1);
  // box-shadow: 2px 2px 5px #b8b9be, -3px -3px 7px #fff;
  // @media screen and ${device.tablet} {
  //   margin: 0px 0px 10px;
  // }
  // &.active {
  //   box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  // }
  // &:hover {
  //   box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  //   border-color: transparent;
  // }
  // display: blok;
  // // margin: 10px 50px 0 50px;
  // width: 100%;
  // // align-self: center;
  // box-shadow: none;
  // border-radius: 0;
`;
export const LinkMenu = styled(LinkProjects)`
  // border-radius: 0.55rem;
  // border: 0.06rem solid rgba(30, 30, 30, 0.1);
  // box-shadow: 2px 2px 5px #b8b9be, -3px -3px 7px #fff;
  // &.active {
  //   box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  // }

  // &:hover {
  //   box-shadow: none;
  //   border-color: rgba(30, 30, 30, 0.1);
  // }
`;
export const DivProject = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding-top: 40px;
  @media screen and ${device.laptop} {
    // width: 60%;
    justify-content: center;
    // align-items: center;
  }
`;
