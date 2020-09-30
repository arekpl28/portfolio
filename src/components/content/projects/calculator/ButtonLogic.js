import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const BtnLogic = styled(ButtonAll)``;

export default function ButtonLogic({ content, type, click }) {
  return (
    <>
      <BtnLogic onClick={click(content)} type={type || ""}>
        {content}
      </BtnLogic>
    </>
  );
}
