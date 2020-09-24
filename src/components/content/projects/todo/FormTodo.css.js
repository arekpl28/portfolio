import styled from "styled-components";

import { Input } from "../../../Input.css";

import { Button } from "../../../Button.css";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
`;
export const DivInput = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
`;

export const InputTodo = styled(Input)``;

export const ButtonTodo = styled(Button)`
  &:hover {
    color: red;
  }
`;

export const DivSelect = styled.div`
  display: grid;
  font-size: 0.875rem;
  width: 100%;
  padding-top: 10px;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-weight: 300;
`;
export const Label = styled.label`
  justify-self: start;
  margin-bottom: 0.25rem;
`;

export const Select = styled.select`
  appearance: none;
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  background-image: linear-gradient(45deg, transparent 50%, #31344b 50%),
    linear-gradient(135deg, #31344b 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    box-shadow: 2px 2px 5px #b8b9be, -3px -3px 7px #fff;
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
`;
