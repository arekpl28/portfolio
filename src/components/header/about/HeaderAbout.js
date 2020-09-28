import React, { useEffect } from "react";

import Navigation from "../../Navigation";
import AboutContentHeader from "./AboutContentHeader";

import { BigWrapperHeaderAbout } from "../../css/Wrapper.css";

import { AboutImage, Clouds } from "../../css/HeaderImage.css";

import img1 from "./img/cloud1.png";
import img2 from "./img/cloud2.png";
import img3 from "./img/cloud3.png";
import img4 from "./img/cloud4.png";
import img5 from "./img/cloud5.png";

export default function HeaderAbout() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <BigWrapperHeaderAbout>
        <AboutImage></AboutImage>
        <Clouds>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img3} alt="" />
        </Clouds>
        <Navigation></Navigation>
        <AboutContentHeader></AboutContentHeader>
      </BigWrapperHeaderAbout>
    </>
  );
}
