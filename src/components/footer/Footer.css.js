import styled from "styled-components";
import { Logo } from "../Logo.css";
import { Button } from "../Button.css";
import { Input } from "../Input.css";
import { device } from "../../utils/variables";

export const H4 = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
`;
export const H5 = styled.h5`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Wrapper = styled.footer`
  width: 100%;
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 20px;
`;
export const Div = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const LogoFooter = styled(Logo)`
  display: inline-block;
  font-size: 7vw;
  grid-area: logo;
  padding-bottom: 10px;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    font-size: 6vh;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    font-size: 4vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    font-size: 3vw;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    font-size: 4vw;
  }
  @media screen and ${device.laptopM} {
    font-size: 2vw;
  }
  @media screen and ${device.desktop} {
    font-size: 1.5vw;
    padding-left: 20px;
  }
`;
export const Wrap = styled.div``;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: space-between;
  }
  @media screen and ${device.laptopM} {
    width: 80%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  }
  @media screen and ${device.laptopL} {
    width: 70%;
  }
`;
export const DivContentWrapper = styled.div`
  width: 100%;
`;
export const Contact = styled.div`
  width: 100%;
  height: 100%;
  i {
    font-size: 1rem;
    padding-top: 0.3rem;
  }
`;
export const Info = styled.a`
  display: grid;
  grid-template-columns: 2rem 1fr;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  color: white;
  list-style: none;
  text-decoration: none;
  p {
    padding-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
  }
`;
export const Menu = styled.div`
  justify-self: center;
  @media screen and (min-width: 700px) and (orientation: portrait) {
    width: min-content;
    margin: 0 auto;
  }
  @media screen and (min-width: 700px) and (orientation: landscape) {
    width: min-content;
    margin: 0 auto;
  }
`;

export const NavFooter = styled.ul`
  li {
    a {
      font-size: 1rem;
      margin: 0;
      color: white;
    }
  }
`;
export const Subscribe = styled.div``;
export const InputFooter = styled(Input)`
  color: white;
  box-shadow: inset 5px 5px 10px #0c0c0c, inset -5px -5px 10px #303030;
`;
export const ButtonFooter = styled(Button)`
  margin-top: 1.5rem;
  color: #dde1f7;
  border: none;
  box-shadow: 5px 5px 10px #0c0c0c, -5px -5px 10px #303030;
  &:hover {
    box-shadow: inset 5px 5px 10px #0c0c0c, inset -5px -5px 10px #303030;
  }
`;
export const DivWrapperSocialMedia = styled.div`
  padding: 20px 0;
  text-align: center;
  @media screen and ${device.laptopM} {
    a {
      width: 30px;
      height: 30px;
      i {
        font-size: 0.8rem;
        border: 1px solid;
      }
    }
  }
`;