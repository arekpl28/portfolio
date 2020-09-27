import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { device } from "../../../../utils/variables";
//  @media screen and (min-width: 700px) and (orientation: landscape) {
//     width: min-content;
//     margin: 0 auto;
//   }

//  @media screen and ${device.tablet} and (orientation: portrait) {
//     font-size: 4vw;
//   }
export const DivTodoContainer = styled.div`
  width: 100%;
  // padding: 1rem;
  max-height: 30vh;
  // box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  @media screen and (orientation: landscape) {
    max-height: 50vh;
  }
  @media screen and ${device.tablet} and (orientation: landscape) {
    max-height: 40vh;
  }
  @media screen and ${device.laptop} {
    max-height: 20vh;
  }
`;

export const UlTodoList = styled.ul`
  list-style: none;
  border: none;
  // li.completed {
  //   text-decoration: line-through;
  //   opacity: 0.2;
  // }
`;
export const Bar = styled(SimpleBar)`
  max-height: 30vh;
  @media screen and (orientation: landscape) {
    max-height: 50vh;
  }
  @media screen and ${device.tablet} and (orientation: landscape) {
    max-height: 40vh;
  }
  @media screen and ${device.laptop} {
    max-height: 20vh;
  }
`;
