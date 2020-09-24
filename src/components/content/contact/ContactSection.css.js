import styled from "styled-components";
import { device } from "../../../utils/variables";
import { Button } from "../../Button.css";
import { Input } from "../../Input.css";

export const Contact = styled.div`
  display: grid;
  grid-template-rows: 50vh 1fr;
  width: 100%;
  column-gap: 20px;
  padding-top: 20px;

  @media screen and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptopM} {
    padding: 20px 80px;
  }
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 6px 6px 12px #b8b9be, -6px -6px 9px #fff;
`;
export const Form = styled.form`
  @media screen and (orientation: portrait) {
    padding-top: 30px;
  }
`;
export const DivLabel = styled.div`
  display: grid;
  width: 100%;
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.875rem;
  padding-top: 10px;
  margin-bottom: 1rem;

  &:nth-child(1) {
    padding-top: 0px;
  }
`;
export const Label = styled.label`
  margin-bottom: 0.25rem;
`;
export const DivInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  border-radius: 10px;
`;
export const InputContact = styled(Input)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:hover {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const DivIcon = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;
  justify-self: right;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: rgb(77, 77, 77);
  border: 0.06rem solid rgba(30, 30, 30, 0.1);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #e6e7ee;
`;
export const DivTextArea = styled(DivLabel)``;
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.6rem 0.75rem;
  font-family: "Nunito", sans-serif;
  border: none;
  outline: none;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: transparent;
`;
export const BtnSubmit = styled(Button)`
  margin-top: 10px;
`;
