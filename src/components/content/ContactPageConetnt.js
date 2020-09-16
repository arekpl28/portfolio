import React from "react";

import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";

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
  Input,
  TextArea,
  DivTextArea,
  Button,
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
                  <i className={ICONS.USER}></i>
                </Div>
                <Div>
                  <Input placeholder="Email" type="email" />
                  <i className={ICONS.EMAIL}></i>
                </Div>
                <Div>
                  <Input placeholder="Phone" type="text" />
                  <i className={ICONS.PHONE}></i>
                </Div>
                <DivTextArea>
                  <TextArea placeholder="Message"></TextArea>
                  <i className={ICONS.PENCIL}></i>
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
