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
  &:focus {
    box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  }
`;
