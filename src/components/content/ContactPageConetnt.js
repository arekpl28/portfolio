import React from "react";

import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";
import { Input } from "../Input.css";
import {
  Wrapper,
  Container,
  Card,
  Icon,
  ImgBox,
  ContentBox,
  H5Title,
  Description,
  DivLink,
  LinkCard,
  Section,
  Map,
  Contact,
  DivContentWrapper,
  MapWrapper,
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
        <Container>
          <Card>
            <ImgBox>
              <Icon className={ICONS.SMARTPHONE}></Icon>
            </ImgBox>
            <ContentBox>
              <H5Title>Phone</H5Title>
              <Description>Call customer service 0800 123 456</Description>
            </ContentBox>
            <DivLink>
              <LinkCard>Call</LinkCard>
            </DivLink>
          </Card>
          <Card>
            <ImgBox>
              <Icon className={ICONS.MAP}></Icon>
            </ImgBox>
            <ContentBox>
              <H5Title>Address</H5Title>
              <Description>2246 Cambrige Court springdale</Description>
            </ContentBox>
            <DivLink>
              <LinkCard>Map</LinkCard>
            </DivLink>
          </Card>
          <Card>
            <ImgBox>
              <Icon className={ICONS.EMAIL}></Icon>
            </ImgBox>
            <ContentBox>
              <H5Title>Email </H5Title>
              <Description>arekpl28@wp.pl</Description>
            </ContentBox>
            <DivLink>
              <LinkCard>Message</LinkCard>
            </DivLink>
          </Card>
        </Container>
        <Section>
          <MapWrapper>
            <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
          </MapWrapper>
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
