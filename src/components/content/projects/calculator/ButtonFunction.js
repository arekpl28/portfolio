import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const BtnFn = styled(ButtonAll)``;

export default function ButtonFunction({ content, type, click }) {
  return (
    <>
      <BtnFn onClick={click(content)} type={type || ""}>
        {content}
      </BtnFn>
    </>
  );
}
