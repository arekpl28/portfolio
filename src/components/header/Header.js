import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderHome from "./home/HeaderHome";
import HeaderProjects from "./project/HeaderProjects";
import HeaderContact from "./contact/HeaderContact";

export default function Header() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HeaderHome}></Route>
        <Route path="/about" component={HeaderHome}></Route>
        <Route path="/projects" component={HeaderProjects}></Route>
        <Route path="/contact" component={HeaderContact}></Route>
      </Switch>
    </>
  );
}
