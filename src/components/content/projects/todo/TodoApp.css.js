import styled from "styled-components";
import { device } from "../../../../utils/variables";
//  @media screen and (min-width: 700px) and (orientation: landscape) {
//     width: min-content;
//     margin: 0 auto;
//   }

//  @media screen and ${device.tablet} and (orientation: portrait) {
//     font-size: 4vw;
//   }

export const DivTodoApp = styled.div`
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;

  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
export const DivWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
export const H2 = styled.h2`
  font-size: 1.5rem;
`;
