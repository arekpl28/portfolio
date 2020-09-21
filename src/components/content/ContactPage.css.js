import styled from "styled-components";
import { device } from "../../utils/variables";
import { Button, A } from "../Button.css";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  background-color: #e6e7ee;
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 70vw));
  justify-content: center;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  @media screen and ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  }
  @media screen and ${device.laptop} {
    width: 80vw;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media screen and ${device.laptopM} {
    width: 60vw;
  }
`;
export const Card = styled.div`
  border: 1px solid rgba(50, 163, 177, 0.2);
  margin: 20px;
  height: 280px;
  display: grid;
  grid-template-rows: max-content max-content 1fr;

  padding: 20px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px #b8b9be, -6px -6px 14px #fff;
  @media screen and (orientation: portrait) {
    height: unset;
  }
`;
export const ImgBox = styled.div`
  position: relative;
  text-align: center;
`;
export const Icon = styled.i`
  font-size: 80px;
  color: #32a3b1;
`;
export const ContentBox = styled.div`
  position: relative;
  margin-top: 20px;
  text-align: center;
  color: #32a3b1;
`;
export const H5Title = styled.h5`
  font-weight: 700;
  font-size: 1.2rem;
  list-style: 2px;
`;
export const Description = styled.p`
  font-size: 0.8rem;
`;
export const DivLink = styled.div`
  display: grid;
  @media screen and (orientation: portrait) {
    margin-top: 20px;
  }
`;
export const LinkCard = styled(A)`
  justify-self: center;
  align-self: end;
  color: #32a3b1;
  border-color: rgba(50, 163, 177, 0.2);
`;
export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 1fr;
  width: 100%;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    grid-template-columns: 1fr;
    grid-template-rows: 50vw 1fr;
  }
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    min-height: 50vh;
  }
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  @media screen and ${device.laptopM} {
    display: grid;
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
  @media screen and ${device.laptopM} {
    width: 500px;
    justify-self: right;
  }
  @media screen and ${device.laptopL} {
    width: 30vw;
  }
`;
export const Contact = styled.div`
  max-width: 500px;
  align-content: center;
  @media screen and ${device.laptopL} {
    max-width: 30vw;
  }
`;
export const Form = styled.form`
  padding: 20px;
  @media screen and ${device.laptopL} {
    padding: 0px;
  }
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
