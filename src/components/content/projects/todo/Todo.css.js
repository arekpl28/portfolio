import styled from "styled-components";

import { Button } from "../../../Button.css";

export const DivTodo = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content min-content;
  margin: 0.5rem;
  // background: white;
  font-size: 1.5rem;
  color: black;
  transition: all 1s ease;
  border: none;
  border-radius: 10px;
  // padding: 0.55rem 0.95rem;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
`;

export const Li = styled.li`
  padding: 0rem 0.5rem;
  width: 100%;
  word-break: break-all;
`;

const Btn = styled(Button)`
  background: #e6e7ee;
  padding: 0.35rem 0.75rem;
  justify-self: right;
  box-shadow: none;
`;

export const BtnComplete = styled(Btn)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: green;
`;

export const BtnTrash = styled(Btn)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: red;
`;
