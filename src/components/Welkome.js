import React from "react";

import {
  Wrapper,
  Name,
  Profession,
  DivProfileImg,
  Padding,
} from "./style/Welkome.css";

import SocialMedia from "./SocialMedia";

export default function Welkome() {
  return (
    <>
      <Wrapper>
        <Name>Arkadiusz Plumbaum</Name>
        <Profession>Junior front-end Developer</Profession>
        <div>
          <SocialMedia></SocialMedia>
        </div>
      </Wrapper>
      <DivProfileImg>
        <img src="./images/arek.jpg" alt="Pictuer of Arkadiusz Plumbaum" />
      </DivProfileImg>
      <Padding></Padding>
    </>
  );
}
