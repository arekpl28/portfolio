import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavItem, NavItemLink } from "./NavigationListItem.css";

export default function NavigationListItem({ handleClickBurger, className }) {
  const { scrollTop } = useContext(DataContext);

  return (
    <>
      <NavItem onClick={scrollTop} className={className}>
        <NavItemLink onClick={handleClickBurger} exact to="/">
          Home
        </NavItemLink>
      </NavItem>
      <NavItem onClick={scrollTop} className={className}>
        <NavItemLink onClick={handleClickBurger} to="/about">
          About
        </NavItemLink>
      </NavItem>
      <NavItem onClick={scrollTop} className={className}>
        <NavItemLink onClick={handleClickBurger} to="/projects">
          Projects
        </NavItemLink>
      </NavItem>
      <NavItem onClick={scrollTop} className={className}>
        <NavItemLink onClick={handleClickBurger} to="/contact">
          Contact
        </NavItemLink>
      </NavItem>
    </>
  );
}
