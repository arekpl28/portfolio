import React from "react";

import NavigationList from "./NavigationListItem";

import { Nav, NavUl } from "./style/Navigation.css";
import { Logo } from "./style/Logo.css";

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
