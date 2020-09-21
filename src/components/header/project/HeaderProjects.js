import React, { useEffect } from "react";

import Navigation from "../../Navigation";
import ProjectsContentHeader from "./ProjectsContentHeader";

import { SmallWrapperHeader } from "../../css/Wrapper.css";

import { ContactImage } from "../../css/HeaderImage.css";

export default function HeaderProjects() {
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
        <ProjectsContentHeader></ProjectsContentHeader>
      </SmallWrapperHeader>
    </>
  );
}
