import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContent from "../components/content/HomePageContent";
import ContactPageConetnt from "../components/content/ContactPageConetnt";
import AboutPageContent from "../components/content/AboutPageContent";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePageContent}></Route>
        <Route path="/about" component={AboutPageContent}></Route>
        <Route path="/projects" component={HomePageContent}></Route>
        <Route path="/contact" component={ContactPageConetnt}></Route>
      </Switch>
    </>
  );
}
