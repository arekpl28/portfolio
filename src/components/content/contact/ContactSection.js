import React from "react";

import { SOCIAL_MEDIA, ICONS } from "../../../utils/constant";

import {
  Contact,
  Map,
  DivIcon,
  InputContact,
  DivContentWrapper,
  MapWrapper,
  Form,
  DivLabel,
  Label,
  DivInput,
  TextArea,
  DivTextArea,
  BtnSubmit,
} from "./ContactSection.css";

export default function ContactSection() {
  return (
    <>
      <Contact>
        <MapWrapper>
          <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
        </MapWrapper>
        <DivContentWrapper>
          <Form>
            <DivLabel>
              <Label htmlFor="name">Name</Label>
              <DivInput>
                <InputContact id="name" type="text" />
                <DivIcon>
                  <i className={ICONS.USER}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="email">Email</Label>
              <DivInput>
                <InputContact id="email" type="email" />
                <DivIcon>
                  <i className={ICONS.EMAIL}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="phone">Phone</Label>
              <DivInput>
                <InputContact id="phone" type="text" />
                <DivIcon>
                  <i className={ICONS.PHONE}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivTextArea>
              <Label htmlFor="message">Message</Label>
              <DivInput>
                <TextArea></TextArea>
                <DivIcon>
                  <i className={ICONS.PENCIL}></i>
                </DivIcon>
              </DivInput>
            </DivTextArea>
            <BtnSubmit>Submit</BtnSubmit>
          </Form>
        </DivContentWrapper>
      </Contact>
    </>
  );
}
