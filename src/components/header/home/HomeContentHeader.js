import React from "react";

import {
  Wrapper,
  Name,
  Profession,
  DivProfileImg,
} from "./HomeContentHeader.css";

import SocialMedia from "../../SocialMedia";

export default function HomeContentHeader() {
  return (
    <>
      <Wrapper>
        <Name>Arkadiusz Plumbaum</Name>
        <Profession>Junior front-end Developer</Profession>
        <div>
          <SocialMedia></SocialMedia>
        </div>
        <DivProfileImg>
          <img src="images/arek.jpg" alt="Pictuer of Arkadiusz Plumbaum" />
        </DivProfileImg>
      </Wrapper>
    </>
  );
}
