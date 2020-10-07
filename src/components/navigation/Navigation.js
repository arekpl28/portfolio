import React, { useContext, useEffect } from "react";

import NavigationList from "./NavigationListItem";
import ScrollTopArrow from "./ScrollTopArrow";
import LanguageSelect from "./LanguageSelect";
import Lang from "./Lang";

import pl_icon from "../img/pl_icon.png";
import en_icon from "../img/en_icon.png";
import no_icon from "../img/no_icon.png";

import { DataContext } from "../../context/DataProvider";

import { NavItem, NavItemLink } from "./NavigationListItem.css";

import {
  DivDark,
  Nav,
  Burger,
  Line,
  NavUl,
  Language,
  ImgStyle,
} from "./Navigation.css";
import { Logo } from "./Logo.css";

export default function Navigation() {
  const {
    burgerActive,
    setBurgerAcive,
    viewportWidth,
    path,
    scrollTop,
    handleChangeLanguage,
    setActiveLang,
    activeLang,
  } = useContext(DataContext);

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
    setActiveLang(false);
  };

  return (
    <>
      <Nav className={path === "/about" ? "about" : ""}>
        <Logo onClick={scrollTop} exact to="/">
          Logo
        </Logo>
        {burgerActive ? <DivDark onClick={handleClickBurger}></DivDark> : null}
        <Burger
          className={burgerActive ? "burgerActive" : ""}
          onClick={handleClickBurger}
        >
          <Line className={path === "/about" ? "about" : ""}></Line>
          <Line className={path === "/about" ? "about" : ""}></Line>
          <Line className={path === "/about" ? "about" : ""}></Line>
        </Burger>
        <NavUl className={burgerActive ? "navActive" : ""}>
          <NavigationList
            className={burgerActive ? "navLinkFade" : ""}
            handleClickBurger={burgerActive ? handleClickBurger : null}
          ></NavigationList>
          <LanguageSelect
            key="language"
            className={burgerActive ? "navLinkFade" : ""}
          ></LanguageSelect>
          {activeLang ? <Lang></Lang> : null}
        </NavUl>
        <Language>
          <ImgStyle>
            <img
              onClick={() => handleChangeLanguage("pl")}
              src={pl_icon}
              alt=""
            />
          </ImgStyle>
          <ImgStyle>
            <img
              onClick={() => handleChangeLanguage("en")}
              src={en_icon}
              alt=""
            />
          </ImgStyle>
          <ImgStyle>
            <img
              onClick={() => handleChangeLanguage("no")}
              src={no_icon}
              alt=""
            />
          </ImgStyle>
        </Language>
      </Nav>
      <ScrollTopArrow />
    </>
  );
}
