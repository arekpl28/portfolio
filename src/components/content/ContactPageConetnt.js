import React from "react";
import styled from "styled-components";

import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";

import {
  Wrapper,
  Section,
  Map,
  Contact,
  DivContentWrapper,
  Form,
  Div,
  Input,
  TextArea,
  DivTextArea,
  Button,
} from "./ContactPage.css";

const WrapperInfo = styled.div`
  display: grid;
  width: 100%;
  padding: 15px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  justify-content: space-around;
  background-color: white;
  gap: 15px;
`;

const DivInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 100px;
`;
const Icon = styled.i`
  font-size: 3rem;
  color: green;
`;
const DviMedia = styled.div`
  padding-left: 10px;
`;
const H5Title = styled.h5`
  font-size: 2rem;
`;
const Description = styled.p`
  font-size: 1.4rem;
`;

export default function ContactPage() {
  return (
    <>
      <Wrapper>
        <WrapperInfo>
          <DivInfo>
            <Icon className={ICONS.SMARTPHONE}></Icon>
            <DviMedia>
              <H5Title>Phone</H5Title>
              <Description>Call customer service 0n 0800 123 456</Description>
            </DviMedia>
          </DivInfo>
          <DivInfo>
            <Icon className={ICONS.MAP}></Icon>
            <DviMedia>
              <H5Title>Address</H5Title>
              <Description>2246 Cambrige Court springdale</Description>
            </DviMedia>
          </DivInfo>
          <DivInfo>
            <Icon className={ICONS.EMAIL}></Icon>
            <DviMedia>
              <H5Title>Email </H5Title>
              <Description>arekpl28@wp.pl</Description>
            </DviMedia>
          </DivInfo>
        </WrapperInfo>

        <Section>
          <DivContentWrapper>
            <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
          </DivContentWrapper>
          <DivContentWrapper>
            <Contact>
              <Form>
                <Div>
                  <Input placeholder="Name" type="text" />
                  <i class={ICONS.USER}></i>
                </Div>
                <Div>
                  <Input placeholder="Email" type="email" />
                  <i class={ICONS.EMAIL}></i>
                </Div>
                <Div>
                  <Input placeholder="Phone" type="text" />
                  <i class={ICONS.PHONE}></i>
                </Div>
                <DivTextArea>
                  <TextArea placeholder="Message"></TextArea>
                  <i class={ICONS.PENCIL}></i>
                </DivTextArea>
                <Button>Submit</Button>
              </Form>
            </Contact>
          </DivContentWrapper>
        </Section>
      </Wrapper>
    </>
  );
}
