import React, { useState, useEffect } from "react";

import {
  BtnNumbers,
  BtnLogic,
  Memory,
  Display,
  Calc,
  CalculatorWrapper,
  BtnFunctions,
} from "./Calculator.css";

import ButtonNumber from "./ButtonNumber";
import ButtonFunction from "./ButtonFunction";
import ButtonMemory from "./ButtonMemory";
import ButtonLogic from "./ButtonLogic";

export default function Calculator() {
  const [value, setValue] = useState("0");

  const handlerButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      return;
    }
    if (content === "+/-") {
      setValue((num * -1).toString());
      return;
    }

    setValue(parseFloat(num + content).toString());

    console.log(content);
  };

  return (
    <>
      <CalculatorWrapper>
        <Calc>
          <Display>{value}</Display>
          <Memory>
            <ButtonMemory
              click={handlerButtonPress}
              content="MC"
            ></ButtonMemory>
            <ButtonMemory
              click={handlerButtonPress}
              content="MR"
            ></ButtonMemory>
            <ButtonMemory
              click={handlerButtonPress}
              content="M+"
            ></ButtonMemory>
            <ButtonMemory
              click={handlerButtonPress}
              content="M-"
            ></ButtonMemory>
            <ButtonMemory
              click={handlerButtonPress}
              content="MS"
            ></ButtonMemory>
          </Memory>
          <BtnLogic>
            <ButtonLogic click={handlerButtonPress} content="%" type="function">
              %
            </ButtonLogic>
            <ButtonLogic click={handlerButtonPress} content="CE">
              CE
            </ButtonLogic>
            <ButtonLogic click={handlerButtonPress} content="C">
              C
            </ButtonLogic>
            <ButtonLogic click={handlerButtonPress} content="1/x">
              1/x
            </ButtonLogic>
            <ButtonLogic click={handlerButtonPress} content="x(2)">
              x(2)
            </ButtonLogic>
            <ButtonLogic
              click={handlerButtonPress}
              content="squr"
            ></ButtonLogic>
          </BtnLogic>
          <BtnNumbers>
            <ButtonNumber click={handlerButtonPress} content="7"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="8"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="9"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="4"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="5"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="6"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="1"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="2"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="3"></ButtonNumber>
            <ButtonNumber
              click={handlerButtonPress}
              content="+/-"
              type="function"
            ></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content="0"></ButtonNumber>
            <ButtonNumber click={handlerButtonPress} content=","></ButtonNumber>
          </BtnNumbers>
          <BtnFunctions>
            <ButtonFunction
              click={handlerButtonPress}
              content="AC"
              type="function"
            ></ButtonFunction>
            <ButtonFunction
              click={handlerButtonPress}
              content="/"
              type="operator"
            ></ButtonFunction>
            <ButtonFunction
              click={handlerButtonPress}
              content="x"
              type="operator"
            ></ButtonFunction>
            <ButtonFunction
              click={handlerButtonPress}
              content="-"
              type="operator"
            ></ButtonFunction>
            <ButtonFunction
              click={handlerButtonPress}
              content="+"
              type="operator"
            ></ButtonFunction>
            <ButtonFunction
              click={handlerButtonPress}
              content="="
              type="operator"
            ></ButtonFunction>
          </BtnFunctions>
        </Calc>
      </CalculatorWrapper>
    </>
  );
}
