import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const BtnMemo = styled(ButtonAll)``;

export default function ButtonMemory({ content, type, click }) {
  return (
    <>
      <BtnMemo onClick={click(content)} type={type || ""}>
        {content}
      </BtnMemo>
    </>
  );
}
