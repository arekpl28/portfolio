import React, { useEffect } from "react";
import Navigation from "./Navigation";

import Welkome from "./Welkome";
import BackGroundImage from "./BackGroundImage";
import { Wrapper, Dark } from "./style/Header.css";
export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };
  return (
    <>
      <Wrapper>
        <BackGroundImage></BackGroundImage>
        <Dark></Dark>

        <Navigation onScroll={(e) => handleSticky(e)}></Navigation>

        <Welkome></Welkome>
      </Wrapper>
    </>
  );
}
