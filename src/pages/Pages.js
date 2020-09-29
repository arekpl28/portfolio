import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContent from "../components/content/HomePageContent";
import ProjectPageContent from "../components/content/projects/ProjectPageContent";
import ContactPageConetnt from "../components/content/contact/ContactPageConetnt";
import AboutPageContent from "../components/content/AboutPageContent";
// import TodoApp from "../components/content/projects/todo/TodoApp";

import ProjectListPage from "../components/content/projects/ProjectListPage";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePageContent}></Route>
        <Route path="/about" component={AboutPageContent}></Route>
        <Route path="/projects" component={ProjectListPage}></Route>
        <Route path="/project/:id" component={ProjectPageContent}></Route>
        <Route path="/contact" component={ContactPageConetnt}></Route>
      </Switch>
    </>
  );
}
