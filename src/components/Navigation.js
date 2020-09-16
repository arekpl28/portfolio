import React from "react";
import NavigationList from "./NavigationListItem";

import { Nav, Burger, Line, NavUl } from "./Navigation.css";
import { Logo } from "./Logo.css";

const handleClickBurger = () => {
  const nav = document.querySelector(NavUl);
  const navLinks = document.querySelectorAll(`${NavUl} li`);
  const burgerColor = document.querySelector(`${Burger}`);
  burgerColor.classList.toggle("burgerActive");
  nav.classList.toggle("navActive");
  navLinks.forEach((link) => {
    link.classList.toggle("navLinkFade");
  });
};

export default function Navigation() {
  return (
    <Nav>
      <Logo
        style={{
          fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        }}
        exact
        to="/"
      >
        Logo
      </Logo>
      <Burger onClick={handleClickBurger}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Burger>
      <NavUl>
        <NavigationList></NavigationList>
      </NavUl>
    </Nav>
  );
}
