import React from "react";

import {
  Nav,
  LogoNavLink,
  NavUl,
  NavItem,
  NavItemLink,
} from "./style/Navigation.css";

export default function Navigation() {
  return (
    <Nav>
      <LogoNavLink className="logo" exact to="/">
        Logo
      </LogoNavLink>
      <NavUl>
        <NavItem>
          <NavItemLink exact to="/">
            Home
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/about">About</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/projects">Projects</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/contact">Contact</NavItemLink>
        </NavItem>
      </NavUl>
    </Nav>
  );
}
