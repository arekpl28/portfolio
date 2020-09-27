import styled from "styled-components";

import { Button } from "../../../Button.css";

import { device } from "../../../../utils/variables";
//  @media screen and (min-width: 700px) and (orientation: landscape) {
//     width: min-content;
//     margin: 0 auto;
//   }

//  @media screen and ${device.tablet} and (orientation: portrait) {
//     font-size: 4vw;
//   }

export const DivTodo = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr min-content min-content;
  margin: 5px 5px 1rem 5px;
  font-size: 1.5rem;
  // color: black;
  transition: all 0.5s ease;
  border: none;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;

export const Number = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 0.8rem;
  // background: tra;
  padding: 0.35rem 0.35rem;
  // box-shadow: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0.06rem solid rgba(199, 199, 199, 0.2);
  color: #868686;

  &.completed {
    text-decoration: line-through;
    // opacity: 0.2;
    text-decoration-color: red;
  }
  @media screen and ${device.laptop} {
  }
`;
export const Li = styled.li`
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: 0.8rem;
  padding: 0.35rem 0.35rem;
  font-weight: 300;
  background-color: transparent;
  border: none;
  // border-radius: 10px;
  outline: none;
  color: #03a9f4;
  // display: grid;
  // padding: 0rem 0.5rem;
  // width: 100%;
  // word-break: break-all;
  // font-size: 1rem;
  // box-shadow: ${({ theme }) => theme.box_shadow_out.small};

  &.completed {
    text-decoration: line-through;
    opacity: 0.5;
    text-decoration-color: red;
  }
`;

const Btn = styled(Button)`
  font-size: 0.8rem;
  // background: #e6e7ee;
  padding: 0.35rem 0.75rem;
  justify-self: right;
  box-shadow: none;
`;

export const BtnComplete = styled(Btn)`
  // border-top-left-radius: 0px;
  // border-bottom-left-radius: 0px;
  // border-top-right-radius: 0px;
  // border-bottom-right-radius: 0px;
  color: green;
  border-radius: 0px;
  border-right: 0.06rem solid rgba(199, 199, 199, 0.2);
  border-left: 0.06rem solid rgba(199, 199, 199, 0.2);
  i.completed {
    opacity: 0.5;
    color: orange;
  }
`;

export const BtnTrash = styled(Btn)`
  // border-top-right-radius: 10px;
  // border-bottom-right-radius: 10px;
  // border-top-left-radius: 0px;
  // border-bottom-left-radius: 0px;
  color: red;
`;
