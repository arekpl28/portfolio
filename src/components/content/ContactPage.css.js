import styled from "styled-components";
import { device } from "../../utils/variables";
import { Button } from "../Button.css";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  background-color: #e6e7ee;
`;
export const WrapperInfo = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-around;
  background-color: white;
  padding: 15px 15px 0 15px;
  @media screen and (min-width: 540px) and (orientation: portrait) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 166px));
    padding: 20px;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    padding: 20px;
  }
  @media screen and (min-width: 550px) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 170px));
    padding: 20px;
  }
  @media screen and ${device.tablet} and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  }
  @media screen and ${device.laptopM} and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  }
  @media screen and ${device.desktopM} and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 350px));
  }
`;
export const DivInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  padding-bottom: 10px;
`;
export const Icon = styled.i`
  font-size: 2rem;
  padding-top: 5px;
  color: green;
  @media screen and ${device.laptopM} {
    font-size: 2.5rem;
  }
  @media screen and ${device.desktopM} {
    font-size: 4rem;
  }
`;
export const DviMedia = styled.div`
  padding-left: 10px;
`;
export const H5Title = styled.h5`
  font-size: 1.5rem;
  @media screen and ${device.tablet} {
    font-size: 2rem;
  }
  @media screen and ${device.laptopM} {
    font-size: 2.5rem;
  }
  @media screen and ${device.desktopM} {
    font-size: 4rem;
  }
`;
export const Description = styled.p`
  font-size: 1.4rem;
  @media screen and ${device.tablet} {
    font-size: 1.6rem;
  }
  @media screen and ${device.laptopM} {
    font-size: 2rem;
  }
  @media screen and ${device.desktopM} {
    font-size: 3rem;
  }
`;
export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 1fr;
  width: 100%;

  @media screen and (min-width: 720px) {
    grid-template-columns: 50vw 1fr;
    grid-template-rows: 1fr;
    min-height: 50vh;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
  }
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 6px 6px 12px #b8b9be, -6px -6px 9px #fff;
  @media screen and ${device.laptop} {
  }
`;
export const Contact = styled.div`
  max-width: 500px;
  align-content: center;
  // background: #ddd;
  // box-shadow: 6px 6px 12px #b8b9be, -6px -6px 9px #fff;
  // border-radius: 10px;
`;
export const Form = styled.form`
  padding: 20px;
`;
export const Div = styled.div`
  display: grid;
  font-size: 0.875rem;
  width: 100%;
  padding-top: 10px;
  margin-bottom: 1rem;

  line-height: 1.5;
  font-weight: 300;
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;
`;
export const DivInput = styled.div``;
export const TextArea = styled.textarea`
  font-family: "Nunito", sans-serif;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.6rem 0.75rem;
  outline: none;
  background-color: transparent;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  border: none;
  border-radius: 10px;
`;
export const DivTextArea = styled(Div)`
  i {
    align-self: flex-start;
  }
`;
export const BtnSubmit = styled(Button)`
  margin-top: 30px;
`;
