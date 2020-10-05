import React from "react";

import SocialMedia from "../../SocialMedia";
import arekImg from "../../img/arek.jpg";

import {
  Wrapper,
  Name,
  Profession,
  DivMedia,
  DivProfileImg,
} from "./HomeContentHeader.css";

export default function HomeContentHeader() {
  return (
    <>
      <Wrapper>
        <Name>Arkadiusz Plumbaum</Name>
        <Profession>Junior front-end Developer</Profession>
        <DivMedia>
          <SocialMedia></SocialMedia>
        </DivMedia>
        <DivProfileImg>
          <img src={arekImg} alt="Pictuer of Arkadiusz Plumbaum" />
        </DivProfileImg>
      </Wrapper>
    </>
  );
}
