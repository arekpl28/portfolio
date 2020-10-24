import React from "react";

import SocialMedia from "../../SocialMedia";
import arekImg from "../../../img/arek.jpg";

import { DESCRIPTION } from "../../../utils/constant";

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
        <Profession>{DESCRIPTION.JUNIOR}</Profession>
        <DivMedia>
          <SocialMedia></SocialMedia>
        </DivMedia>
      </Wrapper>
      <DivProfileImg>
        <img src={arekImg} alt="Pictuer of Arkadiusz Plumbaum" />
      </DivProfileImg>
    </>
  );
}
