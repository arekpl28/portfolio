import React from "react";
import styled from "styled-components";

import ButtonMemory from "./ButtonMemory";

export const BtnMemoryStyle = styled.div`
  grid-area: memory;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  color: green;
`;

const btns = [
  {
    content: "MC",
  },
  {
    content: "MR",
  },
  {
    content: "M+",
  },
  {
    content: "M-",
  },
  {
    content: "MS",
  },
];

export default function BtnMemory({ click }) {
  const buttons = btns.map((btn) => {
    return (
      <ButtonMemory
        key={btn.content}
        content={btn.content}
        click={click}
      ></ButtonMemory>
    );
  });
  return (
    <>
      <BtnMemoryStyle>{buttons}</BtnMemoryStyle>
    </>
  );
}
