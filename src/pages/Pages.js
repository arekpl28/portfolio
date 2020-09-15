import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContent from "../components/content/HomePageContent";
import ContactPageConetnt from "../components/content/ContactPageConetnt";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePageContent}></Route>
        <Route path="/about" component={HomePageContent}></Route>
        <Route path="/projects" component={HomePageContent}></Route>
        <Route path="/contact" component={ContactPageConetnt}></Route>
      </Switch>
    </>
  );
}
