import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavItem, NavItemLink } from "./NavigationListItem.css";

const navItems = [
  { id: 0, title: "Home", to: "/", exact: true },
  { id: 1, title: "About", to: "/about" },
  { id: 2, title: "Projects", to: "/projects" },
  { id: 3, title: "Contact", to: "/contact" },
];

export default function NavigationListItem({ handleClickBurger, className }) {
  const { scrollTop } = useContext(DataContext);

  const navListitem = navItems.map((item) => {
    return (
      <NavItem key={item.id} onClick={scrollTop} className={className}>
        <NavItemLink
          onClick={handleClickBurger}
          exact={item.exact}
          to={item.to}
        >
          {item.title}
        </NavItemLink>
      </NavItem>
    );
  });
  return <>{navListitem}</>;
}
