import React from "react";

import NavigationList from "./NavigationListItem";

import { Nav, NavUl } from "./Navigation.css";
import { Logo } from "./Logo.css";

export default function Navigation() {
  return (
    <Nav>
      <Logo exact to="/">
        Logo
      </Logo>
      <NavUl>
        <NavigationList></NavigationList>
      </NavUl>
    </Nav>
  );
}
