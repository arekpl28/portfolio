import React, { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { ScrollTop } from "./ScrollTopArrow.css";

export default function ScrollTopArrow() {
  const { scrollTop } = useContext(DataContext);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <ScrollTop
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </>
  );
}
