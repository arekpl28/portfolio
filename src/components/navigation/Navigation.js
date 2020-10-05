import React, { useContext, useEffect } from "react";
import NavigationList from "./NavigationListItem";
import ScrollTopArrow from "./ScrollTopArrow";

import { DataContext } from "../../context/DataProvider";

import { DivDark, Nav, Burger, Line, NavUl } from "./Navigation.css";
import { Logo } from "./Logo.css";

export default function Navigation() {
  const { burgerActive, setBurgerAcive, viewportWidth, path } = useContext(
    DataContext
  );
  console.log(path);

  useEffect(() => {
    if (setBurgerAcive && viewportWidth > 710) {
      setBurgerAcive(false);
    }
  }, [setBurgerAcive, viewportWidth]);

  const handleClickBurger = (e) => {
    if (setBurgerAcive) {
      setBurgerAcive(false);
    }
    if (!burgerActive) {
      setBurgerAcive(true);
    }
  };

  return (
    <>
      <Nav className={path === "/about" ? "about" : ""}>
        <Logo exact to="/">
          Logo
        </Logo>
        {burgerActive ? <DivDark onClick={handleClickBurger}></DivDark> : null}

        <Burger
          className={burgerActive ? "burgerActive" : ""}
          onClick={handleClickBurger}
        >
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Burger>
        <NavUl className={burgerActive ? "navActive" : ""}>
          <NavigationList
            className={burgerActive ? "navLinkFade" : ""}
            handleClickBurger={burgerActive ? handleClickBurger : null}
          ></NavigationList>
        </NavUl>
      </Nav>
      <ScrollTopArrow />
    </>
  );
}
