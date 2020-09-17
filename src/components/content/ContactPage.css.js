import styled from "styled-components";
import { device } from "../../utils/variables";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  background-color: #f8f9fa;
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
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
  }
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  @media screen and ${device.laptop} {
    padding: 20px 40px;
  }
`;
export const Contact = styled.div`
  max-width: 600px;
  align-content: center;
`;
export const Form = styled.form`
  padding: 20px;
`;
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 100%;
  padding-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  i {
    font-size: 1.2rem;
    justify-self: right;
    align-self: center;
  }
`;
export const Input = styled.input`
  height: 50px;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  outline: none;
`;
export const TextArea = styled.textarea`
  font-family: "Poppins", sans-serif;
  min-height: 100px;
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  overflow: auto;
  resize: none;
  border: none;
`;
export const DivTextArea = styled(Div)`
  i {
    align-self: flex-start;
  }
`;
export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
  padding: 5px 10px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    color: white;
  }
`;
