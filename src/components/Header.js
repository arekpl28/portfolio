import React, { useEffect } from "react";
import Navigation from "./Navigation";

import { BgImg, Wrapper, Dark } from "./style/Header.css";
import Welkome from "./Welkome";
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
        <BgImg>
          <div className="dark"></div>
        </BgImg>
        <Dark></Dark>
        <Navigation onScroll={(e) => handleSticky(e)}></Navigation>

        <Welkome></Welkome>
      </Wrapper>
    </>
  );
}
