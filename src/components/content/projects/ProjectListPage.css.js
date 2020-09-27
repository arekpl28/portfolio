import styled from "styled-components";
import { Link } from "react-router-dom";
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
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgc};
`;
export const Container = styled.div`
  display: grid;
  width: 250px;
  grid-gap: 4vw;
  padding: 4vw;
  margin: 0 auto;
  @media screen and ${device.mobileM} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    align-content: center;
    width: 100%;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(77, 77, 77, 0.3);
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 130px;
  // padding-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    // border-radius: 20px;
  }
`;
export const ContentBox = styled.div`
  display: grid;
  padding-top: 10px;
  text-align: center;
  grid-template-rows: min-content 1fr min-content;
  // transform-origin: top;
  transition: 0.6s;
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const LinkClock = styled(NavA)`
  width: max-content;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  justify-self: center;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

// export const ModalWrapper = styled.section`
//   position: fixed;
//   display: grid;
//   top: 0%;
//   left: 0%;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
// `;

// export const Modal = styled.div`
//   position: absolute;
//   display: grid;
//   justify-self: center;
//   align-self: center;
//   width: 90%;
//   height: 80%;
//   background-color: #e6e7ee;
//   border-radius: 20px;
// `;
// export const Close = styled.span`
//   position: absolute;
//   top: 0%;
//   right: 0%;
//   font-size: 30px;
//   margin: 10px 20px;
//   color: green;
//   cursor: pointer;
//   &:hover {
//     color: red;
//   }
// `;
// export const Middle = styled.div`
//   background: red;
//   width: 60%;
//   height: 90%;
//   justify-self: center;
//   align-self: center;
// `;
