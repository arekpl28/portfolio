import React from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Contact>
        <MapWrapper>
          <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
        </MapWrapper>
        <DivContentWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivLabel>
              {/* {errors.name && <span>This field is required</span>} */}
              <Label htmlFor="name">Name</Label>
              <DivInput>
                <InputContact
                  ref={register({ required: true })}
                  id="name"
                  name="name"
                  type="text"
                />
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
