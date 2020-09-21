import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContent from "../components/content/HomePageContent";
import ProjectsPage from "../components/content/ProjectsPage";
import ContactPageConetnt from "../components/content/ContactPageConetnt";
import AboutPageContent from "../components/content/AboutPageContent";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePageContent}></Route>
        <Route path="/about" component={AboutPageContent}></Route>
        <Route path="/projects" component={ProjectsPage}></Route>
        <Route path="/contact" component={ContactPageConetnt}></Route>
      </Switch>
    </>
  );
}
