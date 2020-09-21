import React from "react";

import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";
import { Input } from "../Input.css";
import {
  Wrapper,
  WrapperInfo,
  DivInfo,
  Icon,
  DviMedia,
  H5Title,
  Description,
  Section,
  Map,
  Contact,
  DivContentWrapper,
  Form,
  Div,
  Label,
  DivInput,
  TextArea,
  DivTextArea,
  BtnSubmit,
} from "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <Wrapper>
        <WrapperInfo>
          <DivInfo>
            <Icon className={ICONS.SMARTPHONE}></Icon>
            <DviMedia>
              <H5Title>Phone</H5Title>
              <Description>Call customer service 0800 123 456</Description>
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
                  <Label htmlFor="name">Name</Label>
                  <DivInput>
                    <Input id="name" type="text" />
                  </DivInput>
                </Div>
                <Div>
                  <Label htmlFor="email">Email address</Label>
                  <DivInput>
                    <Input id="email" type="email" />
                  </DivInput>
                </Div>
                <Div>
                  <Label htmlFor="phone">Phone number</Label>
                  <DivInput>
                    <Input id="phone" type="text" />
                  </DivInput>
                </Div>
                <DivTextArea>
                  <Label htmlFor="message">Message</Label>
                  <DivInput>
                    <TextArea></TextArea>
                  </DivInput>
                </DivTextArea>
                <BtnSubmit>Submit</BtnSubmit>
              </Form>
            </Contact>
          </DivContentWrapper>
        </Section>
      </Wrapper>
    </>
  );
}
