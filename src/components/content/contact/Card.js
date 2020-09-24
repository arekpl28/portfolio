import React from "react";

import {
  DivCard,
  Icon,
  ImgBox,
  ContentBox,
  H5Title,
  Description,
  DivLink,
  LinkCard,
  DivBox,
} from "./Card.css";

export default function Card({ icon, title, description, linkTitle }) {
  return (
    <>
      <DivCard>
        <ImgBox>
          <Icon className={icon}></Icon>
        </ImgBox>
        <DivBox>
          <ContentBox>
            <H5Title>{title}</H5Title>
            <Description>{description}</Description>
          </ContentBox>
          <DivLink>
            <LinkCard>{linkTitle}</LinkCard>
          </DivLink>
        </DivBox>
      </DivCard>
    </>
  );
}
