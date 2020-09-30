import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  user-select: none;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;

export const Calc = styled.div`
  display: grid;
  grid-template-columns: 60vw 20vw;
  grid-template-rows: 11vh 8vh 40vw 80vw;
  grid-template-areas: "display display" "memory memory" "logic functions" "numbers functions ";
  width: 100%;
  height: 100%;
`;

export const Display = styled.div`
  display: grid;
  grid-area: display;
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  color: ${({ theme }) => theme.text.color};
  text-align: right;
`;

export const ButtonAll = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  &:hover {
    box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  }
`;

export const Memory = styled.div`
  grid-area: memory;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  color: green;
`;

export const BtnLogic = styled.div`
  display: grid;
  grid-area: logic;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  color: #868686;
`;

export const BtnNumbers = styled.div`
  display: grid;
  grid-area: numbers;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  color: ${({ theme }) => theme.text.color_hover};
`;

export const BtnFunctions = styled.div`
  display: grid;
  grid-area: functions;
  grid-template-columns: 1fr;
  color: #03a9f4;
`;
