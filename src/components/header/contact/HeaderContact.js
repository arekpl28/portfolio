import React, { useEffect } from "react";

import Navigation from "../../Navigation";
import ContactContentHeader from "./ContactContentHeader";

import { SmallWrapperHeader } from "../../css/Wrapper.css";

import { ContactImage } from "../../css/HeaderImage.css";

export default function HeaderContact() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <SmallWrapperHeader>
        <ContactImage></ContactImage>
        <Navigation></Navigation>
        <ContactContentHeader></ContactContentHeader>
      </SmallWrapperHeader>
    </>
  );
}
