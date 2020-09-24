import React from "react";

import ContactCard from "./ContactCard";
import ContactSection from "./ContactSection";

import { Wrapper } from "./ContactPageConetnt.css";

export default function ContactPage() {
  return (
    <>
      <Wrapper>
        <ContactCard></ContactCard>
        <ContactSection></ContactSection>
      </Wrapper>
    </>
  );
}
