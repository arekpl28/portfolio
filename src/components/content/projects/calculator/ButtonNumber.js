import React from "react";

import styled from "styled-components";

import { ButtonAll } from "./Calculator.css";

const BtnN = styled(ButtonAll)``;

export default function ButtonNumber({ content, type, click }) {
  return (
    <>
      <BtnN onClick={click(content)} type={type || ""}>
        {content}
      </BtnN>
    </>
  );
}
