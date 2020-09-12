import React from "react";

import { SOCIAL_MEDIA, ICONS } from "../utils/constant";

import {
  Wrapper,
  Map,
  Contact,
  Form,
  Div,
  Input,
  TextArea,
  DivTextArea,
  Button,
} from "../components/style/ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <Wrapper>
        <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
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
      </Wrapper>
    </>
  );
}
