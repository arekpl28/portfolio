import React, { useEffect } from "react";

import Navigation from "../../Navigation";
import HomeContentHeader from "./HomeContentHeader";

import { BigWrapperHeader } from "../../css/Wrapper.css";
import { HomeImage } from "../../css/HeaderImage.css";

export default function HeaderHome() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <BigWrapperHeader>
        <HomeImage></HomeImage>
        <Navigation></Navigation>
        <HomeContentHeader></HomeContentHeader>
      </BigWrapperHeader>
    </>
  );
}
