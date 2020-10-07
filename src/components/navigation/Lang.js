import React, { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

import { NavItem } from "./NavigationListItem.css";
import { Lg } from "./Lang.css";

export default function Lang({ className }) {
  const { burgerActive, activeLang, setActiveLang } = useContext(DataContext);

  const languageSelect = () => {
    setActiveLang(false);
  };
  console.log(activeLang);

  return (
    <>
      <NavItem
        onClick={languageSelect}
        key="pl"
        className={activeLang ? "langFade" : ""}
      >
        <Lg>Polski</Lg>
      </NavItem>
      <NavItem
        onClick={languageSelect}
        key="en"
        className={activeLang ? "langFade" : ""}
      >
        <Lg>Angielski</Lg>
      </NavItem>
      <NavItem
        onClick={languageSelect}
        key="no"
        className={activeLang ? "langFade" : ""}
      >
        <Lg>Norweski</Lg>
      </NavItem>
    </>
  );
}
