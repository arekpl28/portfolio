import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContent from "../components/content/HomePageContent";
import ProjectPage from "../components/content/projects/ProjectPage";
import ContactPageConetnt from "../components/content/contact/ContactPageConetnt";
import TodoApp from "../components/content/projects/todo/TodoApp";

import ProjectListPage from "../components/content/projects/ProjectListPage";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePageContent}></Route>
        <Route path="/about" component={TodoApp}></Route>
        <Route path="/projects" component={ProjectListPage}></Route>
        <Route path="/project/:id" component={ProjectPage}></Route>
        <Route path="/contact" component={ContactPageConetnt}></Route>
      </Switch>
    </>
  );
}
