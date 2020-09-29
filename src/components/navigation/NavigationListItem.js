import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavItem, NavItemLink } from "./NavigationListItem.css";

export default function NavigationListItem({ handleClickBurger, className }) {
  const { burgerActive } = useContext(DataContext);

  return (
    <>
      <NavItem className={className}>
        <NavItemLink onClick={handleClickBurger} exact to="/">
          Home
        </NavItemLink>
      </NavItem>
      <NavItem className={className}>
        <NavItemLink onClick={handleClickBurger} to="/about">
          About
        </NavItemLink>
      </NavItem>
      <NavItem className={className}>
        <NavItemLink onClick={handleClickBurger} to="/projects">
          Projects
        </NavItemLink>
      </NavItem>
      <NavItem className={className}>
        <NavItemLink onClick={handleClickBurger} to="/contact">
          Contact
        </NavItemLink>
      </NavItem>
    </>
  );
}
