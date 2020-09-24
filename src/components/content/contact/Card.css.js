import styled from "styled-components";
import { device } from "../../../utils/variables";
import { A } from "../../Button.css";

export const DivCard = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  width: 100%;
  margin: 20px 0px;
  padding: 20px 10px;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(77, 77, 77, 0.1);
  border-radius: 20px;
  box-shadow: 4px 4px 10px #b8b9be, -6px -6px 14px #fff;

  @media screen and (orientation: landscape) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 6rem 1fr;
    grid-template-rows: 1fr;
  }
`;
export const DivBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;

  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    padding-top: 10px;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    padding-top: 10px;
  }
`;
export const ImgBox = styled.div`
  position: relative;
`;
export const Icon = styled.i`
  font-size: 4.3rem;
  color: rgb(77, 144, 254);

  @media screen and (orientation: landscape) {
    font-size: 3rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 3.5rem;
  }
  @media screen and (orientation: landscape) and (max-height: 500px) {
    font-size: 3rem;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    font-size: 3rem;
  }
  @media screen and ${device.laptop} {
    font-size: 4rem;
  }
`;
export const ContentBox = styled.div`
  position: relative;
  text-align: center;
  color: rgb(77, 77, 77);
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
  width: 150px;
  margin-top: 20px;

  @media screen and (max-width: 281px) {
    width: 80%;
  }
  @media screen and (orientation: landscape) {
    width: 80%;
    align-self: end;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    width: 80%;
    align-self: end;
  }
  @media screen and ${device.laptop} {
    width: 50%;
  }
`;
export const LinkCard = styled(A)`
  width: 100%;
  text-align: center;
  color: rgb(77, 77, 77);
  border-color: rgba(77, 77, 77, 0.1);
`;
