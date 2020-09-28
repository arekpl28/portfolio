import React from "react";

import { NavItem, NavItemLink } from "./NavigationListItem.css";

export default function NavigationListItem() {
  return (
    <>
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
    </>
  );
}
